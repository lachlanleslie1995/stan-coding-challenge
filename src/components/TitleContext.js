import React, { createContext, useState } from "react";

const TitleContext = createContext();

const TitleProvider = props => {
  const [title, setTitle] = useState("Popular Titles");
  const value = { title, setTitle };
  return (
    <TitleContext.Provider value={value}>
      {props.children}
    </TitleContext.Provider>
  );
};

export { TitleContext, TitleProvider };
