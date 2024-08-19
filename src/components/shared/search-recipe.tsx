"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const SearchRecipe = () => {
  const router = useRouter();

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (isFocus) {
      console.log(searchText);
      setSearchText("");
      if (searchText.trim()) {
        router.push(`/search/${searchText}`);
      }
      setIsFocus(false);
    } else {
      setIsFocus(true);
    }
  };

  return (
    <form
      className={`flex items-center justify-center ${
        isFocus && "gap-2"
      } p-2 border rounded-md`}
      onSubmit={handleSubmit}
    >
      <Input
        className={`transition-all p-0 ${isFocus ? "w-32 md:w-40" : "w-0"}`}
        placeholder="Search recipes..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchRecipe;
