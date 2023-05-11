import React, { useEffect, useState } from "react";
import "./Foodstyle.css";
import FoodItem from "./FoodItem";
import MealIndex from "./MealIndex";
import ErrorMessage from "./ErrorMsg";

const Food = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);
  const setIndex = (alphabets) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabets}`);
  };
  const searchRecipeName = (e) => {
    if (e.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <>
      <div className='mainContainer'>
        <div className='headingContainer'>
          <h1>Find your Recipe...!!</h1>
          <h4>Recipe Search Engine using TheMealDB API</h4>
        </div>
        <div className='searchBar'>
          <input
            type='search'
            className='searchInput'
            placeholder='Recipe here.. Eg: soup, cake...,'
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipeName}
          />
        </div>
        <div className='resultContainer'>
          {show ? <FoodItem data={item} /> : <ErrorMessage />}
        </div>
        <div className='alphabetsContainer'>
          <MealIndex alphabetsIndex={(alphabets) => setIndex(alphabets)} />
        </div>
      </div>
    </>
  );
};

export default Food;
