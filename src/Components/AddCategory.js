import React from "react";
import { useState, useContext, useRef } from "react";
import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.production.min";
import { myContext } from "./myContext";

export const AddCategory = () => {
  const nom = useRef(null);
  const { txt, setText } = useContext(myContext);
  console.log("Estamos en addcategory con el valor del context", txt);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit hecho");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="usr"></label>
        <input
          type="text"
          ref={nom}
        
          onChange={() => {
            setText({ ...txt, palabra: nom.current.value });
          }}
        ></input>
      </div>
    </form>
  );
};
