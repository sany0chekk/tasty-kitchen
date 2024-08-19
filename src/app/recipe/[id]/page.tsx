"use client";

import { getRecipeDetails } from "@/app/(server)/recipes-api";
import Title from "@/components/ui/title";
import { Recipe } from "@/lib/types";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RecipeDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipeDetails(Number(id));
        setRecipe(response[0]);
      } catch (error) {
        return {};
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>No recipe found</div>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }

  const instructions = recipe.strInstructions
    .split("\r\n")
    .filter((paragraph) => paragraph.trim() !== "");

  return (
    <div>
      <button
        className="p-2 flex items-center justify-center border rounded-md mb-4 transition-opacity hover:opacity-50 group"
        onClick={() => router.back()}
      >
        <ChevronLeft className="transition-transform group-hover:-translate-x-1" />
      </button>
      <div className="flex flex-col md:flex-row items-start gap-4 mb-10">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          width={300}
          height={300}
          className="transition w-full md:max-w-[300px] object-cover rounded-xl"
        />
        <div>
          <Title classList="text-2xl mb-6">{recipe.strMeal}</Title>
          <p className="font-medium text-sm">
            Category:{" "}
            <span className="text-teal-400">{recipe.strCategory}</span>
          </p>
          <p className="font-medium text-sm">
            Country: <span className="text-teal-400">{recipe.strArea}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-start gap-20">
        <div className="flex-shrink-0 flex flex-col max-md:items-center justify-center">
          <Title classList="text-lg max-md:text-center mb-2">Ingredients</Title>
          <ul>
            {ingredients.length > 0 ? (
              ingredients.map((item, index) => (
                <li key={index}>
                  <p className="flex items-center max-md:justify-center gap-1 font-light max-md:text-center">
                    <span className="capitalize">{item.ingredient}</span> -{" "}
                    <span>{item.measure}</span>
                  </p>
                </li>
              ))
            ) : (
              <li>No ingredients available</li>
            )}
          </ul>
        </div>
        <div>
          <Title classList="text-lg mb-2">Method</Title>
          <div>
            {instructions.map((paragraph, index) => (
              <p key={index} className="font-light mb-4 flex items-start gap-2">
                <span className="opacity-40">{index + 1}.</span>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
