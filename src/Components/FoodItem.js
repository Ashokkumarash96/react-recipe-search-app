import React from "react";
import "./Foodstyle.css";
import ErrorMessage from "./ErrorMsg.js";
import { useNavigate } from "react-router-dom";

const FoodItem = ({ data }) => {
  let navigation = useNavigate();

  return (
    <>
      {!data ? (
        <ErrorMessage />
      ) : (
        data.map((item) => {
          return (
            <div
              className='foodCard'
              key={item.idMeal}
              onClick={() => {
                navigation(`${item.idMeal}`);
              }}
            >
              <img src={item.strMealThumb} alt='foodImg' className='foodImg' />
              <h3>{item.strMeal}</h3>
            </div>
          );
        })
      )}
    </>
  );
};

export default FoodItem;
