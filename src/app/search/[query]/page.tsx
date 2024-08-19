import List from "@/components/shared/list";
import { getSearchRecipes } from "../../(server)/recipes-api";
import RecipeItem from "@/components/shared/recipe-item";
import Title from "@/components/ui/title";

interface Props {
  params: {
    query: string;
  };
}

const SearchPage = async ({ params }: Props) => {
  const { query } = params;

  const recipes = await getSearchRecipes(query);
  console.log(recipes);

  return (
    <div className="">
      <Title classList="mb-4">{`You search: "${query}"`}</Title>
      {recipes.length > 0 ? (
        <List>
          {recipes.map((recipe) => (
            <RecipeItem key={recipe.idMeal} recipe={recipe} />
          ))}
        </List>
      ) : (
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold opacity-50">
          No recipes found
        </p>
      )}
    </div>
  );
};

export default SearchPage;
