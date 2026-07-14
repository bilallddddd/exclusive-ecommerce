import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaBox } from "react-icons/fa";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Slower progress interval (takes about 5-6 seconds to reach 100%)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment by 1-3% each step
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setFadeOut(true);
        const completeTimeout = setTimeout(() => {
          if (onComplete) onComplete();
        }, 600);
        return () => clearTimeout(completeTimeout);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "radial-gradient(circle at center, #1b1112 0%, #070708 80%)",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
        pointerEvents: "none",
        fontFamily: "'Poppins', 'Roboto', sans-serif",
      }}
    >
      {/* Styles for advanced premium animations */}
      <style>{`
        @keyframes cartCatch {
          0%, 100%, 33.3%, 66.6% { transform: scale(1) translateY(0); filter: drop-shadow(0 4px 10px rgba(219, 68, 68, 0.3)); }
          16.6%, 49.9%, 83.2% { transform: scale(1.1) translateY(-6px) rotate(-3deg); filter: drop-shadow(0 12px 25px rgba(219, 68, 68, 0.7)); }
        }
        @keyframes boxFlight {
          0% {
            transform: translateX(150px) translateY(-35px) rotate(0deg) scale(0.4);
            opacity: 0;
            filter: drop-shadow(0 0 0px transparent);
          }
          15% {
            opacity: 1;
          }
          75% {
            transform: translateX(35px) translateY(-5px) rotate(-180deg) scale(1.1);
            opacity: 1;
            filter: drop-shadow(0 5px 10px rgba(255, 255, 255, 0.3));
          }
          90% {
            transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.6);
            opacity: 0.8;
          }
          100% {
            transform: translateX(-5px) translateY(28px) rotate(-360deg) scale(0.1);
            opacity: 0;
          }
        }
        @keyframes textShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-cart-premium {
          animation: cartCatch 1.8s infinite ease-in-out;
        }
        .animate-box-premium-1 {
          animation: boxFlight 1.8s infinite cubic-bezier(0.25, 1, 0.5, 1);
        }
        .animate-box-premium-2 {
          animation: boxFlight 1.8s infinite cubic-bezier(0.25, 1, 0.5, 1);
          animation-delay: 0.6s;
        }
        .animate-box-premium-3 {
          animation: boxFlight 1.8s infinite cubic-bezier(0.25, 1, 0.5, 1);
          animation-delay: 1.2s;
        }
        .logo-gradient-text {
          background: linear-gradient(90deg, #ffffff, #DB4444, #ffffff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 3s linear infinite;
        }
        .glow-aura {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(219, 68, 68, 0.08) 0%, rgba(219, 68, 68, 0) 70%);
          z-index: -1;
          animation: pulseGlow 4s infinite ease-in-out;
        }
      `}</style>

      {/* Background Ambient Glow */}
      <div className="glow-aura" />

      {/* Brand Logo Title with Premium Gradient Shimmer */}
      <h1
        className="logo-gradient-text"
        style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          letterSpacing: "0.5rem",
          marginBottom: "2.5rem",
          textTransform: "uppercase",
          filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))",
        }}
      >
        Exclusive
      </h1>

      {/* Animation Area: Cart and flying boxes */}
      <div
        style={{
          position: "relative",
          width: "280px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        {/* Shopping Cart with dynamic bounce and drop-shadow */}
        <div
          className="animate-cart-premium"
          style={{
            position: "absolute",
            left: "40px",
            color: "#DB4444",
            transition: "all 0.3s ease",
          }}
        >
          <FaShoppingCart size={60} />
        </div>

        {/* Flying Packages with rotations and landing path */}
        <div
          className="animate-box-premium-1"
          style={{
            position: "absolute",
            left: "60px",
            top: "10px",
            color: "#f8fafc",
          }}
        >
          <FaBox size={24} />
        </div>
        <div
          className="animate-box-premium-2"
          style={{
            position: "absolute",
            left: "60px",
            top: "10px",
            color: "#f1f5f9",
          }}
        >
          <FaBox size={24} />
        </div>
        <div
          className="animate-box-premium-3"
          style={{
            position: "absolute",
            left: "60px",
            top: "10px",
            color: "#e2e8f0",
          }}
        >
          <FaBox size={24} />
        </div>
      </div>

      {/* Progress container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "1.5rem",
        }}
      >
        {/* Modern Glassmorphism Progress Bar */}
        <div
          style={{
            width: "220px",
            height: "6px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
            overflow: "hidden",
            position: "relative",
            backdropFilter: "blur(5px)",
          }}
        >
          {/* Active progress bar with neon glow effect */}
          <div
            style={{
              width: `${Math.min(progress, 100)}%`,
              height: "100%",
              backgroundColor: "#DB4444",
              borderRadius: "10px",
              boxShadow: "0 0 10px #DB4444, 0 0 5px rgba(219, 68, 68, 0.5)",
              transition: "width 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        {/* Progress text */}
        <span
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "0.85rem",
            fontWeight: 500,
            marginTop: "12px",
            letterSpacing: "0.08rem",
            textTransform: "uppercase",
          }}
        >
          Loading... {Math.min(progress, 100)}%
        </span>
      </div>
    </div>
  );
}
