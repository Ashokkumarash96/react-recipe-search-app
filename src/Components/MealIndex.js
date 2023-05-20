// import React from "react"
import React from "react";
// import the Foodstyle.css file for styling
import "./Foodstyle.css";

// define the MealIndex component
const MealIndex = ({ alphabetsIndex }) => {
  // define an array of alphabets
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
  // define a variable for the key value
  let num = 0;

  // return the JSX for the MealIndex component
  return (
    <>
      {/* map over the alphabets array and render a div for each alphabet */}
      {alphabets.map((item) => {
        return (
          // render a div with the alphaBox className and a key value
          <div
            className='alphaBox'
            key={num++}
            // pass the item as an argument to the alphabetsIndex prop function on click event
            onClick={() => alphabetsIndex(item)}
          >
            {/* render a heading for the item */}
            <h3>{item}</h3>
          </div>
        );
      })}
    </>
  );
};

// export the MealIndex component as default
export default MealIndex;
