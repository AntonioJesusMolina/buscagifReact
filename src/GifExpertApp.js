import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import'./App.css';
import { myContext } from "./components/myContext";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);


  return (
    <>
    <myContext.Provider value={{categories,setCategories}}>
      <blockquote class="blockquote text-center">
      <div class="p-3 mb-2 bg-dark text-white">
        <h2>BUSCADOR DE GIFS</h2>
      </div>
    </blockquote>
      
      <AddCategory setCategories={setCategories} />
      <hr />
      
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      
    </myContext.Provider>
    </>
  );
};
