import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

const isUrlValid = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

let supabase;

if (supabaseUrl && isUrlValid(supabaseUrl) && !supabaseUrl.includes("YOUR_SUPABASE_PROJECT_URL")) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn("Supabase credentials not configured correctly. Using mock implementation.");
  supabase = {
    auth: {
      signUp: async ({ email, password, options }) => {
        const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
        if (users.find(u => u.email === email)) {
          const err = { message: "User already exists" };
          return { user: null, data: { user: null }, error: err };
        }
        const newUser = {
          id: Math.random().toString(36).substring(2),
          email,
          user_metadata: options?.data || {}
        };
        users.push({ ...newUser, password });
        localStorage.setItem("mock_users", JSON.stringify(users));
        const session = {
          user: newUser
        };
        localStorage.setItem("mock_session", JSON.stringify(session));
        return { user: newUser, data: { user: newUser, session }, error: null };
      },
      signInWithPassword: async ({ email, password }) => {
        const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          const session = {
            user: {
              id: user.id,
              email: user.email,
              user_metadata: user.user_metadata
            }
          };
          localStorage.setItem("mock_session", JSON.stringify(session));
          return { data: { session }, session, error: null };
        }
        return { data: { session: null }, session: null, error: { message: "Invalid email or password" } };
      },
      signInWithOAuth: async ({ provider }) => {
        const session = {
          user: {
            id: "google-mock-id",
            email: "mockuser@gmail.com",
            user_metadata: { first_name: "Mock Google User" }
          }
        };
        localStorage.setItem("mock_session", JSON.stringify(session));
        return { data: { session }, session, error: null };
      },
      signOut: async () => {
        localStorage.removeItem("mock_session");
        return { error: null };
      },
      getSession: async () => {
        const sessionStr = localStorage.getItem("mock_session");
        return { data: { session: sessionStr ? JSON.parse(sessionStr) : null } };
      }
    },
    from: (table) => {
      return {
        update: (fields) => {
          return {
            eq: (field, value) => {
              const sessionStr = localStorage.getItem("mock_session");
              if (sessionStr) {
                const session = JSON.parse(sessionStr);
                if (session.user.id === value) {
                  session.user.user_metadata = {
                    ...session.user.user_metadata,
                    ...fields
                  };
                  localStorage.setItem("mock_session", JSON.stringify(session));
                  // Also update in mock_users list
                  const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
                  const userIndex = users.findIndex(u => u.id === value);
                  if (userIndex !== -1) {
                    users[userIndex].user_metadata = {
                      ...users[userIndex].user_metadata,
                      ...fields
                    };
                    localStorage.setItem("mock_users", JSON.stringify(users));
                  }
                }
              }
              return { data: {}, error: null };
            }
          };
        }
      };
    }
  };
}

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  // SIGNUP FUNCTION
  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
        },
      },
    });

    const error = res.error;
    const session = res.data?.session || res.session;

    if (error) {
      setError(error.message);
    } else {
      console.log("User signed up: ", firstName);
      if (session) {
        setSession(session);
      }
      alert("Registration Successful!");
      navigate("/my-account");
    }
    setLoading(false);
  };

  // SIGNIN WITH GOOGLE FUNCTION
  const handleGoogleSignin = async () => {
    setLoading(true);
    setError("");

    const res = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    const error = res.error;
    const session = res.data?.session || res.session;

    if (error) {
      setError(error.message);
    } else {
      if (session) {
        setSession(session);
      }
      navigate("/my-account");
    }
    setLoading(false);
  };

  // LOGIN FUNCTION
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    const error = res.error;
    const session = res.data?.session || res.session;

    if (error) {
      setError(error.message);
    } else {
      console.log("Login Successful");
      if (session) {
        setSession(session);
      }
      navigate("/my-account");
    }
    setLoading(false);
  };

  // LOGOUT FUNCTION
  const handleLogout = async () => {
    try {
      setLoading(true);
      setError("");

      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }

      setSession(null);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error("Error logging out:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE USER PROFILE
  const updateProfile = async (formData) => {
    try {
      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("users")
        .update({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          address: formData.address,
        })
        .eq("id", session.user.id);

      if (error) {
        throw error;
      }

      console.log("Profile updated successfully:", data);
      alert("Profile updated successfully!");

      // Optionally, update local session data if needed
      setFirstName(formData.firstName); // Update firstName in context
    } catch (error) {
      console.error("Error updating profile:", error.message);
      alert("Failed to update profile. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // CHECK IF USER IS LOGGED IN
  const isLoggedIn = Boolean(session);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        setSession,
        email,
        setEmail,
        password,
        setPassword,
        firstName,
        setFirstName,
        handleSignup,
        handleLogin,
        handleLogout,
        isLoggedIn,
        handleGoogleSignin,
        error,
        loading,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthContextProvider");
  }
  return context;
}
