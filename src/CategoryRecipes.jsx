import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import recipesData from "./recipes.json";

const RecipeCard = ({
  index,
  title,
  difficulty,
  image_url,
  cookingTime,
  onSelect,
}) => {
  return (
    <motion.div
      layoutId={`recipe-${index}`}
      className="group bg-white shadow-xl rounded-lg p-6 cursor-pointer flex flex-row justify-start gap-10 h-36 relative hover:shadow-2xl transition-shadow duration-300"
      onClick={onSelect}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center xl:h-20">
        <img
          src={image_url}
          alt={title}
          className="w-auto h-20 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-xl lg:text-2xl font-extrabold text-slate-800">
          {title}
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
            {difficulty}
          </span>
          <span className="text-sm font-medium text-slate-600">
            {cookingTime} min
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const FullScreenRecipe = ({ recipe, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 px-2 py-6"
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 500 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.8, 0.5, 1],
      }}
    >
      <div className="bg-white w-full max-w-3xl mx-auto rounded-2xl shadow-2xl overflow-auto flex flex-col items-end p-4 relative">
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-800 text-white px-3 py-1 rounded-full hover:bg-slate-700 transition-colors duration-200"
        >
          ✕
        </motion.button>

        <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[80vh]">
          <div className="w-full flex justify-center">
            <img
              src={recipe.image_url}
              className="w-full max-w-md rounded-xl shadow-md object-contain"
              alt="Recipe Image"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              {recipe.name}
            </h2>

            <div className="flex flex-wrap gap-4">
              <div className="text-base md:text-lg">
                <span className="font-medium text-slate-700">Difficulty:</span>
                <span className="ml-2 text-orange-600 font-semibold">
                  {recipe.difficulty}
                </span>
              </div>
              <div className="text-base md:text-lg">
                <span className="font-medium text-slate-700">Time:</span>
                <span className="ml-2 text-slate-600 font-semibold">
                  {recipe.cookingTime} minutes
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                Ingredients
              </h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                {recipe.ingredients &&
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                Instructions
              </h3>
              <ol className="list-decimal list-inside text-slate-700 space-y-1">
                {recipe.instructions &&
                  recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CuisineRecipes = () => {
  const { cuisine } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (recipesData.recipes && recipesData.recipes[cuisine]) {
      setRecipes(recipesData.recipes[cuisine]);
    }
  }, [cuisine]);

  const selectedRecipe = selectedIndex !== null ? recipes[selectedIndex] : null;

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-t pt-6 from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent font-extrabold text-4xl md:text-5xl lg:text-6xl">
        <h2 className="capitalize">{cuisine} Recipes</h2>
      </div>
      <div className="container mx-auto p-4 sm:p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                index={index}
                title={recipe.name}
                difficulty={recipe.difficulty}
                image_url={recipe.image_url}
                cookingTime={recipe.cookingTime}
                onSelect={() => setSelectedIndex(index)}
              />
            ))
          ) : (
            <p className="text-center text-slate-600 text-lg">
              No recipes found for this cuisine.
            </p>
          )}
        </div>
      </div>
      <AnimatePresence>
        {selectedRecipe && (
          <FullScreenRecipe
            recipe={selectedRecipe}
            index={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CuisineRecipes;
