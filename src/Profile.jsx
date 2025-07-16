import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import userImage from "./assets/images/user-icon.svg";
// import { User, Mail, LogOut, Loader, UserPlus } from "lucide-react";

// --- Main App Component ---
const Profile = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate("/home");
  };

  useEffect(() => {
    document.title = `${userName}'s Profile`;
  }, [userName]);

  // --- Render Logic ---
  return (
    <div className="font-sans antialiased">
      <AnimatePresence mode="wait">
        <main className="flex items-center justify-center min-h-screen w-full p-4 pt-20">
          <motion.div
            className="relative w-full max-w-md rounded-2xl bg-white/10 backdrop-filter backdrop-blur-xl border border-white/20 shadow-2xl p-8 text-white overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="relative z-10 flex flex-col items-center">
              {/* Profile Picture */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  className="h-36 w-36 rounded-full object-cover shadow-lg border-4 border-white/30"
                  src={userImage}
                  alt="Profile"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/144x144/333/FFF?text=Error";
                  }}
                />
                <motion.div
                  className="absolute -inset-2 border-2 border-orange-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* User Info */}
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tight mb-1">
                  Name: {userName}
                </h1>
                <p className="text-lg font-light flex items-center justify-center gap-2">
                  Email: {userEmail}
                </p>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-col items-center gap-4 w-full max-w-xs">
                <motion.button
                  className="group relative w-full inline-flex items-center justify-center py-3 px-6 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-full"></span>
                  Logout
                </motion.button>
              </div>
            </div>
          </motion.div>
        </main>
      </AnimatePresence>
    </div>
  );
};

export default Profile;
