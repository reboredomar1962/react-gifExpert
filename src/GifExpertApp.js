import React, { useState } from "react";
import { AddCategorys } from "./components/AddCategorys";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["rock"]);

  const addCategorie = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategorys onNewCategory={(value) => addCategorie(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
