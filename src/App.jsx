import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";
import BrowseRecipes from "./BrowseRecipes";
import CategoryRecipes from "./CategoryRecipes";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen w-full relative bg-white">
          {/* Orange Soft Glow */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        radial-gradient(circle at center, #FF7112, transparent)
      `,
              opacity: 0.3,
              mixBlendMode: "multiply",
            }}
          />
          {loading && <Loader />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/profile" element={<Profile />} />
            <Route path="/recipes" element={<BrowseRecipes />} />
            <Route path="/cuisine/:cuisine" element={<CategoryRecipes />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
