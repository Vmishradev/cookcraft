import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

const FeatureCard = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="xl:w-60 xl:h-40 sm:h-52 group bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 bg-gradient-to-t from-white via-white to-white hover:from-orange-50 hover:via-white hover:to-white border border-gray-100 hover:border-orange-200"
    >
      <div className="flex gap-3 items-center">
        <h3 className="text-xl font-bold mb-2 group-hover:ml-4 transition-all duration-400 text-slate-800">
          {title}
        </h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const BrowseRecipes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const cuisineCategories = [
    {
      name: "Italian",
      image: "/images/cuisine/italian.png",
      path: "/cuisine/italian",
      alt: "Italian cuisine with pasta and tomatoes",
    },
    {
      name: "Asian",
      image: "/images/cuisine/asian.avif",
      path: "/cuisine/asian",
      alt: "Asian cuisine with noodles and vegetables",
    },
    {
      name: "Mexican",
      image: "/images/cuisine/mexican.avif",
      path: "/cuisine/mexican",
      alt: "Mexican cuisine with tacos and spices",
    },
    {
      name: "Mediterranean",
      image: "/images/cuisine/mediterranean.avif",
      path: "/cuisine/mediterranean",
      alt: "Mediterranean cuisine with fresh ingredients",
    },
    {
      name: "Indian",
      image: "/images/cuisine/indian.avif",
      path: "/cuisine/indian",
      alt: "Indian cuisine with curry and spices",
    },
    {
      name: "American",
      image: "/images/cuisine/american.avif",
      path: "/cuisine/american",
      alt: "American cuisine with burgers and comfort food",
    },
  ];

  const featureHighlights = [
    {
      title: "Quick Meals",
      description: "Ready in 30 minutes or less for busy weeknights",
    },
    {
      title: "Healthy Options",
      description: "Nutritious recipes for a balanced lifestyle",
    },
    {
      title: "Beginner Friendly",
      description: "Step-by-step instructions for cooking novices",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Discover Your Next
            <br />
            <span className="text-yellow-200">Culinary Adventure</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
            Explore recipes from cuisines around the world, tailored to your
            taste preferences and skill level
          </p>
        </div>
      </motion.div>

      {/* Feature Cards Section */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
          >
            Why Choose Our Recipes?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {featureHighlights.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Choose Your Cuisine
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From comfort food classics to exotic international flavors, find
              the perfect recipe for every occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisineCategories.map((cuisine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={cuisine.path}
                  className="relative bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm mx-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl group"
                  aria-label={`Browse ${cuisine.name} recipes`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={cuisine.image}
                      alt={cuisine.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity duration-300"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-orange-200 transition-colors duration-300">
                        {cuisine.name}
                      </h3>
                      <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                        <i className="fi fi-rr-arrow-right text-xl"></i>
                      </div>
                    </div>
                    <p className="text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore authentic {cuisine.name.toLowerCase()} recipes
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-4 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Cooking?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks who have transformed their kitchens
            with our carefully curated recipes
          </p>
          <Link
            to="/recipes/popular"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Browse Popular Recipes
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BrowseRecipes;

// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { useLocation, Link } from "react-router-dom";

// const FeatureCard = ({ title, description }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       viewport={{ once: true, amount: 0.3 }}
//       className="xl:w-60 xl:h-40 sm:h-52 group bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 bg-gradient-to-t from-white via-white to-white hover:from-orange-50 hover:via-white hover:to-white border border-gray-100 hover:border-orange-200"
//     >
//       <div className="flex gap-3 items-center">
//         <h3 className="text-xl font-bold mb-2 group-hover:ml-4 transition-all duration-400 text-slate-800">
//           {title}
//         </h3>
//       </div>
//       <p className="text-gray-700 leading-relaxed">{description}</p>
//     </motion.div>
//   );
// };

// const BrowseRecipes = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   const cuisineCategories = [
//     {
//       name: "Italian",
//       image:
//         "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       path: "/cuisine/italian",
//       alt: "Italian cuisine with pasta and tomatoes",
//     },
//     {
//       name: "Asian",
//       image:
//         "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       path: "/cuisine/asian",
//       alt: "Asian cuisine with noodles and vegetables",
//     },
//     {
//       name: "Mexican",
//       image:
//         "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       path: "/cuisine/mexican",
//       alt: "Mexican cuisine with tacos and spices",
//     },
//     {
//       name: "Mediterranean",
//       image:
//         "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       path: "/cuisine/mediterranean",
//       alt: "Mediterranean cuisine with fresh ingredients",
//     },
//     {
//       name: "Indian",
//       image:
//         "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       path: "/cuisine/indian",
//       alt: "Indian cuisine with curry and spices",
//     },
//     {
//       name: "American",
//       image:
//         "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       path: "/cuisine/american",
//       alt: "American cuisine with burgers and comfort food",
//     },
//   ];

//   const featureHighlights = [
//     {
//       title: "Quick Meals",
//       description: "Ready in 30 minutes or less for busy weeknights",
//     },
//     {
//       title: "Healthy Options",
//       description: "Nutritious recipes for a balanced lifestyle",
//     },
//     {
//       title: "Beginner Friendly",
//       description: "Step-by-step instructions for cooking novices",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 py-16 px-4"
//       >
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
//             Discover Your Next
//             <br />
//             <span className="text-yellow-200">Culinary Adventure</span>
//           </h1>
//           <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
//             Explore recipes from cuisines around the world, tailored to your
//             taste preferences and skill level
//           </p>
//         </div>
//       </motion.div>

//       {/* Feature Cards Section */}
//       <div className="py-12 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
//           >
//             Why Choose Our Recipes?
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
//             {featureHighlights.map((feature, index) => (
//               <FeatureCard
//                 key={index}
//                 title={feature.title}
//                 description={feature.description}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
//               Choose Your Cuisine
//             </h2>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//               From comfort food classics to exotic international flavors, find
//               the perfect recipe for every occasion
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {cuisineCategories.map((cuisine, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Link
//                   to={cuisine.path}
//                   className="relative bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm mx-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl group"
//                   aria-label={`Browse ${cuisine.name} recipes`}
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       src={cuisine.image}
//                       alt={cuisine.alt}
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity duration-300"></div>
//                   </div>

//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                     <div className="flex items-center justify-between">
//                       <h3 className="text-2xl md:text-3xl font-bold group-hover:text-orange-200 transition-colors duration-300">
//                         {cuisine.name}
//                       </h3>
//                       <div className="transform group-hover:translate-x-2 transition-transform duration-300">
//                         <i className="fi fi-rr-arrow-right text-xl"></i>
//                       </div>
//                     </div>
//                     <p className="text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       Explore authentic {cuisine.name.toLowerCase()} recipes
//                     </p>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Call to Action Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-4 text-center"
//       >
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Start Cooking?
//           </h2>
//           <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
//             Join thousands of home cooks who have transformed their kitchens
//             with our carefully curated recipes
//           </p>
//           <Link
//             to="/recipes/popular"
//             className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Browse Popular Recipes
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default BrowseRecipes;
