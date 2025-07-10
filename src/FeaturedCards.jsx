import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="xl:w-72 xl:h-48 sm:h-56 group bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
      bg-gradient-to-br from-white via-orange-50 to-amber-50 hover:from-orange-100 hover:via-amber-50 hover:to-red-50 border border-orange-100 hover:border-orange-200"
    >
      <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const FeatureCards = () => {
  const features = [
    {
      title: "Recipe Collection",
      description:
        "Explore thousands of recipes from cuisines around the world.",
    },
    {
      title: "Cooking Techniques",
      description:
        "Master essential cooking methods through step-by-step tutorials.",
    },
    {
      title: "Ingredient Guide",
      description: "Learn about ingredients and their properties.",
    },
    {
      title: "Meal Planning",
      description:
        "Create balanced weekly meal plans that fit your dietary preferences.",
    },
    {
      title: "Kitchen Tools",
      description:
        "Discover essential kitchen equipment and learn proper usage techniques.",
    },
    {
      title: "Cooking Videos",
      description:
        "Access professional cooking demonstrations and tutorials.",
    },
    {
      title: "Nutritional Insights",
      description:
        "Understand the nutritional value of ingredients and create healthier versions of your favorite dishes.",
    },
    {
      title: "Skill Assessment",
      description:
        "Track your cooking progress and receive personalized recommendations for skill development.",
    },
    {
      title: "Community Sharing",
      description:
        "Connect with fellow cooking enthusiasts, share recipes, and learn from experienced chefs.",
    },
  ];

  return (
    <div className="container mx-auto p-10 sm:px-32 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`${
              index >= features.length - 3 ? "hidden lg:block" : ""
            }`}
          >
            <Card
              title={feature.title}
              description={feature.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
