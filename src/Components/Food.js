// import React from "react"
import React, { useEffect, useState } from "react";
// import the Foodstyle.css file for styling
import "./Foodstyle.css";
// import the FoodItem component
import FoodItem from "./FoodItem";
// import the MealIndex component
import MealIndex from "./MealIndex";
// import the ErrorMessage component
import ErrorMessage from "./ErrorMsg";

// define the Food component
const Food = () => {
  // use the useState hook to create a state variable for the url
  const [url, setUrl] = useState(
    // initialize the url with the base URL and a query parameter
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  // use the useState hook to create a state variable for the item
  const [item, setItem] = useState();
  // use the useState hook to create a state variable for the show flag
  const [show, setShow] = useState(false);
  // use the useState hook to create a state variable for the search value
  const [search, setSearch] = useState("");

  // use the useEffect hook to fetch data from the API when url changes
  useEffect(() => {
    // use the fetch function to make a GET request to the url
    fetch(url)
      // convert the response to JSON format
      .then((resp) => resp.json())
      // handle the data received
      .then((data) => {
        // log the data to the console
        console.log(data.meals);
        // update the item state with the data.meals array
        setItem(data.meals);
        // update the show state to true
        setShow(true);
      });
    // add url as a dependency for useEffect
  }, [url]);
  // define a function to update the url based on alphabets parameter
  const setIndex = (alphabets) => {
    // update the url with a new query parameter using alphabets
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabets}`);
  };
  // define a function to handle the search by recipe name
  const searchRecipeName = (e) => {
    // check if the key pressed is Enter
    if (e.key === "Enter") {
      // update the url with a new query parameter using search value
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  // return the JSX for the Food component
  return (
    <>
      <div className='mainContainer'>
        <div className='headingContainer'>
          {/* render a heading for the app */}
          <h1>Find your Recipe...!!</h1>
          {/* render a subheading for the app */}
          <h4>Recipe Search Engine using TheMealDB API</h4>
        </div>
        <div className='searchBar'>
          {/* render an input element for searching by recipe name */}
          <input
            type='search'
            className='searchInput'
            placeholder='Recipe here.. Eg: soup, cake...,'
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipeName}
          />
        </div>
        <div className='resultContainer'>
          {/* render either FoodItem or ErrorMessage component based on show value */}
          {show ? <FoodItem data={item} /> : <ErrorMessage />}
        </div>
        <div className='alphabetsContainer'>
          {/* render MealIndex component and pass a callback function as prop */}
          <MealIndex alphabetsIndex={(alphabets) => setIndex(alphabets)} />
        </div>
      </div>
    </>
  );
};

// export the Food component as default
export default Food;
