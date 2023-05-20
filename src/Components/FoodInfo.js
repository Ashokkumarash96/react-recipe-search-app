// import React from "react"
import React, { useState } from "react";
// import the useParams hook from react-router-dom
import { useParams } from "react-router-dom";
// import the Foodstyle.css file for styling
import "./Foodstyle.css";

// define the FoodInfo component
const FoodInfo = () => {
  // use the useState hook to create a state variable for the food
  const [food, setFood] = useState();
  // use the useParams hook to get the MealId parameter from the route
  const { MealId } = useParams();
  // check if MealId is not an empty string
  if (MealId !== "") {
    // use the fetch function to make a GET request to the API with the MealId
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      // convert the response to JSON format
      .then((res) => res.json())
      // handle the data received
      .then((data) => {
        // update the food state with the first element of the data.meals array
        setFood(data.meals[0]);
      });
  }

  // return the JSX for the FoodInfo component
  return (
    <>
      {/* check if food is falsy */}
      {!food ? (
        // if yes, render an empty string
        ""
      ) : (
        // if no, render a div with the content className
        <>
          <div className='content'>
            {/* render a div with the headerContent className */}
            <div className='headerContent'>
              {/* render a heading for the food name */}
              <h1 className='recipeInfoTitle1'>{food.strMeal}</h1>
              {/* render a subheading for the food region */}
              <h2 className='recipeInfoTitle2'>
                Popular Region: {food.strArea}
              </h2>
              {/* render a paragraph for the food category */}
              <h3 className='recipeInfoCate'>Category: {food.strCategory}</h3>
            </div>
            {/* render a div with the leftContent className */}
            <div className='leftContent'>
              {/* render an image element for the food thumbnail */}
              <img src={food.strMealThumb} alt='' className='recipeInfoImg' />
            </div>
            {/* render a div with the rightContent className */}
            <div className='rightContent'>
              {/* render a div with the ingredientsContainer className */}
              <div className='ingredientsContainer'>
                {/* render a table element for showing the ingredients and measures */}
                <table>
                  {/* render a table row with a table header for ingredients */}
                  <tr>
                    <th colSpan={2}>Ingredients</th>
                  </tr>
                  {/* render a table row with two table data elements for each ingredient and measure pair */}
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
              {/* render a div with the stepToFollow className */}
              <div className='stepToFollow'>
                {/* render a heading for steps to follow */}
                <h2 className='recipeStep'>Steps to Follow</h2>
                {/* render a horizontal rule element */}
                <hr />
                {/* render a paragraph for the instructions */}
                <h4 className='steps'>{food.strInstructions}</h4>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

// export the FoodInfo component as default
export default FoodInfo;
