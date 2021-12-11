import React, { useEffect, useState, useContext } from "react";
import { GifGridItem } from "./GifGridItem";
import { myContext } from "./myContext";

export default function GifGrid({}) {
  const [images, setImages] = useState([]);
  const { txt, setText } = useContext(myContext);

  console.log("Gifgrid, valor= ", txt.palabra);

  useEffect(() => {
    getGifs();
  });

  const getGifs = async () => {
    let url = "https://api.giphy.com/v1/gifs/search?api_key=";
    let apiKey = "Z4PAQTsExKW2vumTYlaLJ3pKdZ2Ksffw"; //api_key=Z4PAQTsExKW2vumTYlaLJ3pKdZ2Ksffw&q=dog&limit=25&offset=0&rating=g&lang=en
    let sentencia = `${url}${apiKey}&q=${txt.palabra}&limit=12&offset=0&rating=g&lang=en`; //con limit=12 limitamos que solo nos mande 12 elementos
    const resp = await fetch(sentencia);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    console.log(gifs);
  };

  return (
    <div>
      <h3></h3>
      {images.map((img) => {
        <GifGridItem key={img.id} img={img}></GifGridItem>;
      })}
    </div>
  );
}
