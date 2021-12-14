import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({}) => {
  
  const { data: images } = useFetchGifs();
  

  return (
    <>
      <div className="card-grid container">      
        {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}      
      </div>
    </>
  );
};
