import Title from "@/components/ui/title";
import { getCategoryRecipes } from "../(server)/recipes-api";
import RecipeItem from "@/components/shared/recipe-item";
import List from "@/components/shared/list";

interface Props {
  params: {
    category: string;
  };
}

const CategoryRecipes = async ({ params }: Props) => {
  const { category } = params;
  const recipes = await getCategoryRecipes(category);

  return (
    <>
      <Title classList="mb-2">{category}</Title>
      <List>
        {recipes.map((recipe) => {
          return <RecipeItem key={recipe.idMeal} recipe={recipe} />;
        })}
      </List>
    </>
  );
};

export default CategoryRecipes;
