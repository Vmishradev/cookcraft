import React from "react";
import { Link } from "react-router-dom";
import FeatureCards from "./FeaturedCards";
import { motion } from "framer-motion";
import hero from "./assets/images/hero.png";
import logo from "./assets/images/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="sm:px-32 sm:py-10">
        <div className="w-[100%] transition-all duration-1000 ease-in-out overflow-hidden pt-5">
          <div className="inset-0 relative z-10 sm:px-32 sm:py-10">
            <div className="w-full flex flex-col xl:flex-row items-center justify-center xl:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center xl:items-start justify-center"
              >
                <motion.div
                  className="text-center xl:text-left mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-6xl md:text-7xl xl:text-8xl font-black">
                    <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
                      Your Culinary
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                      Adventure
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                      Awaits
                    </span>
                  </h1>
                </motion.div>
                <motion.p
                  className="text-slate-700 text-lg md:text-xl font-medium mb-8 max-w-lg text-center xl:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Discover recipes tailored to your taste preferences and master
                  cooking techniques for every skill level. Transform your
                  kitchen into a culinary playground.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link
                    href="/recipes"
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Cooking
                  </Link>
                  <Link
                    href="/recipes"
                    className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-orange-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative w-80 xl:w-96 h-80 xl:h-96">
                  <div className="absolute inset-0 rounded-full blur-3xl opacity-20"></div>
                  <motion.img
                    src={hero}
                    alt="Chef cooking illustration"
                    className="relative z-10 w-full h-full object-contain"
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}

      <div className="z-10 w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center flex flex-col items-center justify-center font-extrabold text-2xl lg:text-6xl sm:text-4xl"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400 bg-clip-text text-transparent">
              Cook Smart.
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Eat Well.
            </span>
          </h2>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
            Transform your kitchen experience with intelligent cooking solutions
          </p>
        </motion.div>
        <div>
          <FeatureCards />
        </div>
      </div>

      {/* Explore Section */}

      <div className="sm:px-32 sm:py-20">
        <div className="py-16 xl:h-[80vh] w-[100%] flex flex-col items-center justify-center gap-16 px-20 transition-all duration-1000 ease-in-out">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center justify-center bg-gradient-to-t from-gray-700 via-gray-600 to-gray-400 bg-clip-text text-transparent font-extrabold text-5xl lg:text-7xl sm:text-6xl"
          >
            <h2 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Explore
            </h2>
            <p className="text-slate-600 text-xl font-medium text-center">
              Discover endless culinary possibilities
            </p>
          </motion.div>

          <div className="flex xl:flex-row flex-col gap-10">
            <div className="w-96 relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <img src={logo} alt="" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Browse Recipes
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Discover delicious recipes from cuisines around the world.
                  Perfect for beginners to master chefs.
                </p>
              </div>
              <Link
                href="/recipes"
                className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 text-center"
              >
                Explore Now
              </Link>
            </div>

            <div className="w-96 relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-slate-600 rounded-2xl flex items-center justify-center mb-6 relative">
                  <img src={logo} alt="" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-800">🔜</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-400 mb-4">
                  Shopping Lists
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Generate smart shopping lists based on your selected recipes
                  and meal planning preferences.
                </p>
              </div>
              <button className="mt-6 bg-gradient-to-r from-slate-400 to-slate-600 text-white font-semibold py-3 px-6 rounded-xl cursor-not-allowed text-center">
                Coming Soon
              </button>
            </div>

            <div className="w-96 relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-slate-600 rounded-2xl flex items-center justify-center mb-6 relative">
                  <img src={logo} alt="" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-800">🔜</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-400 mb-4">
                  Shopping Lists
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Generate smart shopping lists based on your selected recipes
                  and meal planning preferences.
                </p>
              </div>
              <button className="mt-6 bg-gradient-to-r from-slate-400 to-slate-600 text-white font-semibold py-3 px-6 rounded-xl cursor-not-allowed text-center">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <img src={logo} alt="" />
                </div>
                <h1 className="font-black text-3xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  CookCraft
                </h1>
              </motion.div>
              <p className="text-slate-400 text-lg mb-4">
                Transforming kitchens into culinary playgrounds, one recipe at a
                time.
              </p>
              <p className="text-slate-500">
                Created with ❤️ by passionate food enthusiasts
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-xl mb-4 text-orange-400">
                Quick Links
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-slate-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Browse Recipes
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Cooking Tips
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Video Tutorials
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-xl mb-4 text-orange-400">
                Support
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-slate-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-orange-400 transition-colors duration-300"
                >
                  Community
                </a>
              </div>
            </div>
          </div>

          <p className="border-t border-slate-700 flex items-center justify-center text-slate-400 pt-7">
            © 2025 Mentorix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
