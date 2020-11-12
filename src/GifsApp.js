import React, { useState } from "react";
import AddCategory from "./components/categories/AddCategory";
import GifGrid from "./components/gifs/GifGrid";

export const GifsApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2>Gifs Expert App</h2>
      <AddCategory setCategory={setCategories} />
      <br />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
