import Link from "next/link";
import { ThemeChanger } from "./theme-changer";
import SearchRecipe from "./search-recipe";

const AppBar = () => {
  return (
    <header className="py-4 border-b">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-bold text-xl md:text-3xl relative">
          Tasty{" "}
          <span className="absolute -bottom-2 -right-3 text-sm md:text-lg z-5 text-teal-400">
            Kitchen
          </span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <SearchRecipe />
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
