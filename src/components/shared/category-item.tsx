"use client";

import { Category } from "@/lib/types";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  category: Category;
}

const CategoryItem: React.FC<Props> = ({
  category: { strCategory, strCategoryThumb },
}) => {
  const router = useRouter();
  const handleClick = (category: string) => {
    router.push(`/${category}`);
  };

  return (
    <li
      onClick={() => {
        handleClick(strCategory);
      }}
      className="p-5 relative cursor-pointer border rounded-md bg-gray-100 dark:bg-neutral-900 group flex items-center justify-center"
    >
      <CircleArrowRight
        size={40}
        className="transition z-10 absolute top-1/2 left-1/2 transform -translate-x-3/4 opacity-0 -translate-y-1/2 group-hover:opacity-95 group-hover:-translate-x-1/2"
      />
      <div className="transition-all group-hover:blur-sm">
        <Image
          src={strCategoryThumb}
          alt={strCategory}
          width={300}
          height={300}
          objectFit="cover"
          className="rounded-xl mb-4"
        />
        <p className="font-medium text-lg text-center">{strCategory}</p>
      </div>
    </li>
  );
};

export default CategoryItem;
