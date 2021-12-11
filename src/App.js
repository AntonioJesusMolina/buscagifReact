import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";
import { myContext } from "./Components/myContext";
import "./App.css";

function App() {
  const [txt, setText] = useState({});
  return (
    <myContext.Provider value={{ txt, setText }}>
      <div className="App">
        <header id="cabecera">
          <div>
            <h1 id="titulo">BUSCADOR DE GIFS</h1>
          </div>
        </header>
        <AddCategory></AddCategory>
        <GifGrid></GifGrid>
        <hr></hr>
      </div>
    </myContext.Provider>
  );
}

export default App;
