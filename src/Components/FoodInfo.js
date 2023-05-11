import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Foodstyle.css";

const FoodInfo = () => {
  const [food, setFood] = useState();
  const { MealId } = useParams();
  if (MealId !== "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data.meals[0]);
      });
  }

  return (
    <>
      {!food ? (
        ""
      ) : (
        <>
          <div className='content'>
            <div className='headerContent'>
              <h1 className='recipeInfoTitle1'>{food.strMeal}</h1>
              <h2 className='recipeInfoTitle2'>
                Popular Region: {food.strArea}
              </h2>
              <h3 className='recipeInfoCate'>Category: {food.strCategory}</h3>
            </div>
            <div className='leftContent'>
              <img src={food.strMealThumb} alt='' className='recipeInfoImg' />
            </div>
            <div className='rightContent'>
              <div className='ingredientsContainer'>
                <table>
                  <tr>
                    <th colSpan={2}>Ingredients</th>
                  </tr>
                  <tr>
                    <td>{food.strIngredient1}</td>
                    <td>{food.strMeasure1}</td>
                  </tr>
                  <tr>
                    <td>{food.strIngredient2}</td>
                    <td>{food.strMeasure2}</td>
                  </tr>
                  <tr>
                    <td>{food.strIngredient3}</td>
                    <td>{food.strMeasure3}</td>
                  </tr>
                  <tr>
                    <td>{food.strIngredient4}</td>
                    <td>{food.strMeasure4}</td>
                  </tr>
                  <tr>
                    <td>{food.strIngredient5}</td>
                    <td>{food.strMeasure5}</td>
                  </tr>
                  <tr>
                    <td>{food.strIngredient6}</td>
                    <td>{food.strMeasure6}</td>
                  </tr>
                  <tr>
                    <td>{food.strIngredient7}</td>
                    <td>{food.strMeasure7}</td>
                  </tr>
                  <tr>
                    <td>{food.strIngredient8}</td>
                    <td>{food.strMeasure8}</td>
                  </tr>
                </table>
              </div>
              <div className='stepToFollow'>
                <h2 className='recipeStep'>Steps to Follow</h2>
                <hr />
                <h4 className='steps'>{food.strInstructions}</h4>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FoodInfo;
