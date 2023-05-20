// import React from "react"
import React from "react";
// import the Foodstyle.css file for styling
import "./Foodstyle.css";
// import the ErrorMessage component from ./ErrorMsg.js
import ErrorMessage from "./ErrorMsg.js";
// import the useNavigate hook from react-router-dom
import { useNavigate } from "react-router-dom";

// define the FoodItem component
const FoodItem = ({ data }) => {
  // use the useNavigate hook to get a reference to the navigation function
  let navigation = useNavigate();

  // return the JSX for the FoodItem component
  return (
    <>
      {/* check if data is falsy */}
      {!data ? (
        // if yes, render the ErrorMessage component
        <ErrorMessage />
      ) : (
        // if no, map over the data array and render a div for each item
        data.map((item) => {
          return (
            // render a div with the foodCard className and a key value
            <div
              className='foodCard'
              key={item.idMeal}
              // pass the item id as an argument to the navigation function on click event
              onClick={() => {
                navigation(`${item.idMeal}`);
              }}
            >
              {/* render an image element for the item thumbnail */}
              <img src={item.strMealThumb} alt='foodImg' className='foodImg' />
              {/* render a heading for the item name */}
              <h3>{item.strMeal}</h3>
            </div>
          );
        })
      )}
    </>
  );
};

// export the FoodItem component as default
export default FoodItem;
