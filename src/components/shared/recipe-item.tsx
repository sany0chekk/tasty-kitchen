"use client";

import { CategoryItem, Recipe } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  recipe: CategoryItem | Recipe;
}

const RecipeItem: React.FC<Props> = ({
  recipe: { idMeal, strMeal, strMealThumb },
}) => {
  return (
    <li className="group cursor-pointer">
      <Link href={`/recipe/${idMeal}`}>
        <Image
          src={strMealThumb}
          alt={strMeal}
          width={300}
          height={300}
          className="transition rounded-t-md w-full object-cover group-hover:blur-sm"
        />
        <div className="transition-colors h-20 rounded-b-md border relative group-hover:bg-gray-100 dark:group-hover:bg-neutral-800">
          <h3 className="transition text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 group-hover:-translate-y-[20%]">
            {strMeal}
          </h3>
          <p className="transition font-medium text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%] opacity-0 group-hover:opacity-95 group-hover:-translate-y-1/2">
            Read More
          </p>
        </div>
      </Link>
    </li>
  );
};

export default RecipeItem;
