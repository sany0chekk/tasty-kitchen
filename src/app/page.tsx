import { getCategories } from "./(server)/recipes-api";
import Title from "@/components/ui/title";
import CategoryItem from "@/components/shared/category-item";
import List from "@/components/shared/list";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div>
      <Title classList="mb-2">Categories</Title>
      <List>
        {categories.map((category) => {
          return <CategoryItem key={category.idCategory} category={category} />;
        })}
      </List>
    </div>
  );
}
