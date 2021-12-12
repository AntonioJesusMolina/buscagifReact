import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import'./App.css';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <>
    <blockquote class="blockquote text-center">
      <div class="p-3 mb-2 bg-dark text-white">
        <h2>BUSCADOR DE GIFS</h2>
      </div>
        
        
    </blockquote>
      
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
