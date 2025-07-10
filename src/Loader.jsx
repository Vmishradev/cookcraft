import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 z-50">
      <div className="relative flex flex-col items-center">
        {/* Main cooking pot animation */}
        <motion.div
          className="relative w-20 h-20 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-full"
          animate={{
            y: [0, -5, 0],
            rotateY: [0, 360],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateY: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Pot handle */}
          <div className="absolute -left-3 top-3 w-6 h-3 border-2 border-slate-700 rounded-full border-r-transparent" />
          <div className="absolute -right-3 top-3 w-6 h-3 border-2 border-slate-700 rounded-full border-l-transparent" />

          {/* Steam bubbles */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-t from-blue-200 to-white rounded-full opacity-70"
                animate={{
                  y: [0, -20, -40],
                  scale: [0.5, 1, 0],
                  opacity: [0.7, 0.9, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
                style={{
                  left: `${i * 8 - 8}px`,
                }}
              />
            ))}
          </div>

          {/* Cooking contents */}
          <motion.div
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-t from-orange-300 to-yellow-200 rounded-b-full"
            animate={{
              scale: [1, 1.1, 1],
              backgroundColor: ["#fed7aa", "#fef3c7", "#fde68a", "#fed7aa"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Floating ingredients */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: [
                  "#ef4444", // tomato
                  "#22c55e", // basil
                  "#f59e0b", // onion
                  "#8b5cf6", // eggplant
                  "#06b6d4", // water
                  "#f97316", // carrot
                ][i],
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Cooking Up Knowledge
          </motion.h2>
          <motion.p
            className="text-slate-600 text-sm font-medium tracking-wide"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          >
            Preparing your culinary journey...
          </motion.p>
        </motion.div>

        {/* Loading progress bar */}
        <div className="mt-6 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Decorative chef hat */}
        <motion.div
          className="absolute -top-16 right-16 w-8 h-8 bg-white rounded-t-full"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-white rounded-full" />
        </motion.div>

        {/* Decorative utensils */}
        <motion.div
          className="absolute -top-12 left-16 flex space-x-1"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-8 bg-gray-600 rounded-full" />
          <div className="w-1 h-8 bg-gray-600 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
