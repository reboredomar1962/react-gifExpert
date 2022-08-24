import React, { useState } from "react";

export const AddCategorys = ({onNewCategory}) => {
const [inputValue, setinputValue] = useState("");

const onInputChange = (event) =>{
    setinputValue(event.target.value)
}

const onSubmit = (event) =>{
    event.preventDefault()
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim())
    setinputValue("")
}

  return (
    <form onSubmit={onSubmit}>
      <input
        tipe="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChange}
      />
    </form>
  );
};
