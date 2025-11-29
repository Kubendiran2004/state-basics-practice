import { useState } from "react";

const ShapeToggle = () => {
  const [isCircle, setIsCircle] = useState(false);

  const changeShape = () => {
    setIsCircle(!isCircle);
  };

  return (
    <>
      <div 
        className={isCircle ? "circle" : "square"} 
        onClick={changeShape}
      ></div>








      
    </>
  );
};

export default ShapeToggle;
