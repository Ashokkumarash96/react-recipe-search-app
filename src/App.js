import React from "react";
import Food from "./Components/Food";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodInfo from "./Components/FoodInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Food />} />
        <Route path='/:MealId' element={<FoodInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
