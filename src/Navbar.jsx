import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./assets/images/logo.png";
import profile from "./assets/images/user-icon.svg"

const Navbar = () => {
  return (
    <nav className="relative bg-white/90 backdrop-blur-md border-b border-orange-100 w-full h-16 flex items-center justify-between shadow-xl">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 via-amber-50/30 to-yellow-50/50 pointer-events-none"></div>

      {/* Brand Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        <a href="/home" className="flex items-center gap-4 px-6 py-2">
          <div className="relative w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
            <img className="w-10 h-10" src={logo} alt="CookCraft Logo" />
          </div>
          <h1 className="font-black text-3xl bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
            CookCraft
          </h1>
        </a>
      </motion.div>

      <div className="flex flex-row items-center justify-center ">
        <div className="px-4 hidden sm:flex space-x-4">
          <Link
            to="/home"
            className="relative px-6 py-3 text-lg font-semibold text-slate-700 hover:text-orange-600 transition-colors duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="relative px-6 py-3 text-lg font-semibold text-slate-700 hover:text-orange-600 transition-colors duration-300 hover:scale-105"
          >
            Recipes
          </Link>
        </div>
        <Link
          to="/home/profile"
          className="relative px-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.img
            className="h-12 w-12 rounded-full shadow-lg "
            src={profile}
            alt="Profile"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import logo from "./assets/images/logo.png";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // User icon SVG for profile button
//   const UserIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//     >
//       <defs>
//         <linearGradient id="profileGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#f97316" />
//           <stop offset="100%" stopColor="#ef4444" />
//         </linearGradient>
//       </defs>
//       <path
//         fill="url(#profileGradient)"
//         d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.69-8 6v2h16v-2c0-3.31-3.58-6-8-6Z"
//       />
//     </svg>
//   );

//   // Hamburger icon SVG
//   const HamburgerIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//     >
//       <defs>
//         <linearGradient id="menuGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#f97316" />
//           <stop offset="100%" stopColor="#ef4444" />
//         </linearGradient>
//       </defs>
//       <path
//         fill="url(#menuGradient)"
//         d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
//       />
//     </svg>
//   );

//   // Close icon SVG
//   const CloseIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//     >
//       <defs>
//         <linearGradient id="closeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#f97316" />
//           <stop offset="100%" stopColor="#ef4444" />
//         </linearGradient>
//       </defs>
//       <path
//         fill="url(#closeGradient)"
//         d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
//       />
//     </svg>
//   );

//   return (
//     <nav className="relative bg-white/90 backdrop-blur-md w-full h-20 flex items-center justify-between shadow-lg border-b border-orange-100">
//       {/* Decorative gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 via-amber-50/30 to-yellow-50/50 pointer-events-none"></div>

//       {/* Brand Section */}
//       <motion.div
//         initial={{ opacity: 0, x: -30 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="relative z-10"
//       >
//         <a href="/home" className="flex items-center gap-4 px-6 py-2 group">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
//             <div className="relative w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
//               <img className="w-10 h-10" src={logo} alt="CookCraft Logo" />
//             </div>
//           </div>
//           <h1 className="font-black text-3xl bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-red-600 transition-all duration-300">
//             CookCraft
//           </h1>
//         </a>
//       </motion.div>

//       {/* Desktop Navigation */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="hidden md:flex items-center space-x-8 relative z-10"
//       >
//         {["Home", "Recipes", "Learn"].map((item, idx) => (
//           <a
//             key={idx}
//             href={`/${item.toLowerCase()}`}
//             className="relative px-6 py-3 text-lg font-semibold text-slate-700 hover:text-orange-600 transition-colors duration-300 group"
//           >
//             <span className="relative z-10">{item}</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-10"></div>
//           </a>
//         ))}
//       </motion.div>

//       {/* Profile and Mobile Menu Section */}
//       <motion.div
//         initial={{ opacity: 0, x: 30 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         className="flex items-center space-x-4 px-6 relative z-10"
//       >
//         {/* Profile Button - Shows icon on mobile, text on larger screens */}
//         <a href="/profile" className="relative group">
//           <div className="absolute inset-0 bg-white rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
//           <div className="relative flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black font-semibold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
//             <span className="hidden sm:inline">Profile</span>
//             <div className="sm:hidden">
//               <UserIcon />
//             </div>
//           </div>
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden relative w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-lg border border-slate-200 hover:border-orange-300 transition-colors duration-300"
//           aria-label="Toggle Menu"
//         >
//           {/* Animated Hamburger/Close */}
//           <motion.div
//             initial={false}
//             animate={isMenuOpen ? "open" : "closed"}
//             className="flex items-center justify-center w-6 h-6"
//           >
//             <motion.div
//               variants={{
//                 closed: { opacity: 1, rotate: 0 },
//                 open: { opacity: 0, rotate: 90 },
//               }}
//               transition={{ duration: 0.2 }}
//               className="absolute"
//             >
//               <HamburgerIcon />
//             </motion.div>
//             <motion.div
//               variants={{
//                 closed: { opacity: 0, rotate: -90 },
//                 open: { opacity: 1, rotate: 0 },
//               }}
//               transition={{ duration: 0.2 }}
//               className="absolute"
//             >
//               <CloseIcon />
//             </motion.div>
//           </motion.div>
//         </button>
//       </motion.div>

//       {/* Mobile Menu - Fixed positioning and display control */}
//       <motion.div
//         initial={false}
//         animate={{
//           display: isMenuOpen ? "block" : "none",
//           opacity: isMenuOpen ? 1 : 0,
//           y: isMenuOpen ? 0 : -10,
//         }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         className="md:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-orange-100 z-20"
//         style={{ display: "none" }} // Initial state
//       >
//         <div className="py-4 space-y-2">
//           {["Home", "Recipes", "Learn"].map((item, idx) => (
//             <a
//               key={idx}
//               href={`/${item.toLowerCase()}`}
//               className="block px-6 py-4 text-lg font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </motion.div>

//       {/* Floating Action Indicators */}
//       <div className="absolute top-full left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-20 z-0">
//         {[...Array(3)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="w-1 h-1 bg-orange-400 rounded-full"
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [0.3, 0.7, 0.3],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               delay: i * 0.2,
//             }}
//           />
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
