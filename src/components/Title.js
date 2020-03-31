import React, { useContext } from "react";
import { TitleContext } from "../TitleContext";

const Title = () => {
  const { title } = useContext(TitleContext);
  return (
    <div className="page-title" data-testid="page-title">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
