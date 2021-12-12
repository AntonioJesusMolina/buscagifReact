import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { myContext } from "./myContext";

export const AddCategory = ({}) => {
  const [inputValue, setInputValue] = useState(""); // ''
  const { setCategories } = useContext(myContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="row bg justify-content-center">
        <div class="col-sm-4">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                Palabra
              </span>
              <input
                type="text"
                value={inputValue}
                placeholder="Introduzca palabra"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
