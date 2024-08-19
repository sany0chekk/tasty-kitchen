import {
  Category,
  CategoriesResponse,
  CategoryItem,
  CategoryItemsResponse,
  MealsResponse,
  Recipe,
} from "@/lib/types";
import axios from "axios";

const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<CategoriesResponse>(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return response.data.categories;
  } catch (error) {
    return [];
  }
};

const getCategoryRecipes = async (
  category: string
): Promise<CategoryItem[]> => {
  try {
    const response = await axios.get<CategoryItemsResponse>(
      "https://www.themealdb.com/api/json/v1/1/filter.php",
      { params: { c: category } }
    );
    return response.data.meals;
  } catch (error) {
    return [];
  }
};

const getRecipeDetails = async (id: number): Promise<Recipe[]> => {
  const response = await axios.get<MealsResponse>(
    "https://www.themealdb.com/api/json/v1/1/lookup.php",
    { params: { i: id } }
  );
  return response.data.meals;
};

const getSearchRecipes = async (query: string): Promise<Recipe[]> => {
  const response = await axios.get<MealsResponse>(
    "https://www.themealdb.com/api/json/v1/1/search.php",
    {
      params: {
        s: query,
      },
    }
  );
  return response.data.meals || [];
};

export {
  getCategories,
  getCategoryRecipes,
  getRecipeDetails,
  getSearchRecipes,
};
