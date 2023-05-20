// import React from "react"
import React from "react";
// import the Food component from ./Components/Food
import Food from "./Components/Food";
// import the App.css file for styling
import "./App.css";
// import the BrowserRouter, Routes and Route components from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import the FoodInfo component from ./Components/FoodInfo
import FoodInfo from "./Components/FoodInfo";

// define the App component
const App = () => {
  // return the JSX for the App component
  return (
    // wrap the Routes component with the BrowserRouter component
    <BrowserRouter>
      {/* render the Routes component with the route paths and elements*/}
      <Routes>
        {/* render the Food component for the root path */}
        <Route path='/' element={<Food />} />
        {/* render the FoodInfo component for the path with MealId parameter */}
        <Route path='/:MealId' element={<FoodInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

// export the App component as default
export default App;
