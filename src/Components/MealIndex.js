import React from "react";
import "./Foodstyle.css";

const MealIndex = ({ alphabetsIndex }) => {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let num = 0;

  return (
    <>
      {alphabets.map((item) => {
        return (
          <div
            className='alphaBox'
            key={num++}
            onClick={() => alphabetsIndex(item)}
          >
            <h3>{item}</h3>
          </div>
        );
      })}
    </>
  );
};

export default MealIndex;
