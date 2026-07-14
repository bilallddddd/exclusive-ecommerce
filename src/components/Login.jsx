import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import "../App.css";
import { FcGoogle } from "react-icons/fc";

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

import { useState } from "react";
import { useAuthContext } from "../context/authContext";

export default function Login() {
  const {
    handleLogin,
    error,
    loading,
    email,
    setEmail,
    password,
    setPassword,
    handleGoogleSignin,
  } = useAuthContext();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Header />
      <div className="flex flex-row mt-20 mb-20 gap-20 justify-center">
        <div className="hidden sm:block max-w-full h-auto">
          <img
            className="hidden sm:block h-full"
            src="signup-img/singup-img(2).png"
            alt="Login illustration"
          />
        </div>
        <div className="sm:w-11/12 lg:w-1/5">
          <form onSubmit={handleLogin} className="pt-10 sm:w-11/12 ">
            <h1 className="text-black text-4xl font-medium leading-[50px] tracking-wider mb-6">
              Log in to Exclusive
            </h1>
            <p className="text-black text-base font-normal leading-normal">
              Enter your details below
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <input
                type="text"
                id="emailOrNumber"
                name="emailOrNumber"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+"
                placeholder="Enter email or Phone number"
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
                  className="border-b-2 border-black p-2 focus:outline-none"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8} 
                />
                <span
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleTogglePasswordVisibility}
                >
                  <Icon icon={passwordVisible ? eye : eyeOff} size={20} />
                </span>
              </div>
              <div className="flex flex-row justify-center gap-20">
                <button
                  type="submit"
                  className="w-full h-12 mt-10 bg-red-500 rounded text-neutral-50 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
                  disabled={loading}
                >
                  {loading ? "Logging In..." : "Log In"}
                </button>
                {error && <p className="text-red-500 mt-10">{error}</p>}
                </div>
                <div className="flex flex-col py-10">
                        <div className="w-full h-12 bg-white border border-black rounded-md flex items-center justify-center transition-shadow duration-300 cursor-pointer hover:bg-red-lg hover:bg-red">
                            <button
                                className="flex items-center justify-center gap-4"
                                type="button"
                                onClick={handleGoogleSignin}
                            >
                               <FcGoogle size="20" />
                                <span className="text-black">Log in with Google</span>
                            </button>
                        </div>
                    </div>
                <div className="mt-2">
                  <a href="#" className="text-red-500">Forgot Password?</a>
                </div>
             
              
            </div>
            <div className="flex flex-row gap-4 justify-center mt-5">
              <p className="opacity-70 mb-10 text-black text-base font-normal leading-normal">
                Don't have an account?
              </p>
              <Link
                className="opacity-70 text-black text-base font-medium leading-normal underline underline-offset-8"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
