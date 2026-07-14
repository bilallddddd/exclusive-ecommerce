// import { Link, NavLink } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import "../App.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import { useAuthContext } from "../context/authContext";

export default function SignUp() {
  const {
    handleSignup,
    handleGoogleSignin,
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    error,
    loading,
  } = useAuthContext();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Header />
      <div className="flex flex-row mt-20 mb-20 gap-20 justify-center">
        <div className="hidden sm:block  max-h-max">
          <img
            className="hidden sm:block h-full"
            src="signup-img/singup-img(2).png"
            alt="image description"
          />
        </div>
        <div>
          <form onSubmit={handleSignup} className="">
            <h1 className="text-black text-4xl font-medium leading-[50px] tracking-wider">
              Create an account
            </h1>
            <p className="text-black text-base font-normal leading-normal">
              Enter your details below
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                className="border-b-2 border-black p-2 focus:outline-none"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                id="emailOrNumber"
                name="emailOrNumber"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+"
                placeholder="Enter email or number"
                required
                className="border-b-2 border-black p-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative w-full">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  id="passWordBox"
                  className="border-b-2  border-black p-2 focus:outline-none"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleTogglePasswordVisibility}
                >
                  <Icon icon={passwordVisible ? eye : eyeOff} size={20} />
                </span>
              </div>
            </div>
            <div className="w-96 max-sm:w-full h-14 px-32 max-sm:p-0 py-4 mt-10 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              <button
                className="text-neutral-50"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Create Account"}
              </button>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>

            <div className="flex flex-col py-10 ">
              <div className="w-96 max-sm:w-full h-14 px-20 py-4 max-sm:p-0 max-sm:items-center max-sm:justify-center rounded border border-black border-opacity-40 flex-col justify-start items-start gap-2.5 inline-flex transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                <div className="justify-start items-start gap-4 inline-fle">
                  <div className="w-6 relative" />
                  <button
                    className="text-black text-base font-normal leading-normal flex flex-row gap-4 px-4"
                    type="button"
                    onClick={handleGoogleSignin}
                  >
                    <img src="icons/Icon-Google.png" />
                    Sign up with Google
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <p className="opacity-70 mb-10  text-black text-base font-normal leading-normal">
                Already have account?
              </p>
              <Link
                className="opacity-70 text-black text-base font-medium leading-normal underline underline-offset-8"
                to="/login"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
