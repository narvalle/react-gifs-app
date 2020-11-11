import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({ target }) => setInputValue(target.value);
  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setCategory((oldCategory) => [inputValue, ...oldCategory]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleInputSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.proTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default AddCategory;
