
import React, { useState } from "react";
import logo from "../../assets/images/logo-BfNap0Pe.png";
import { Link, NavLink } from "react-router-dom";
import '../../.././src/index.css'

export default function Header({ getdata, getCategoryMeals }) {

  const [selected, setSelected] = useState("All");

  const handleSelect = (value) => {
    setSelected(value);
    if (value === "All") getdata();
    else getCategoryMeals(value);
  };

  return (
    <>
      <div className="p-4 sm:ml-64 bg-[#f4f2ee] pacifico-regular ">
        <h1 className=" bg-gradient-to-r from-orange-400 via-red-500 to-rose-600  bg-clip-text text-transparent text-4xl font-bold ">Learn, Cook, Eat Your Food</h1>
        <ul className=" hidden md:flex flex-wrap gap-5 mt-8 border-b border-gray-200 text-gray-500">
          <li  >
            <NavLink onClick={getdata} to="/" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500" > All</NavLink>
          </li>

          <li  >
            <NavLink onClick={(e) => { getCategoryMeals('Beef') }} to="#/category/Beef" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Beef</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('BreakFast') }} to="#/category/BreakFast" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> BreakFast</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Chicken') }} to="#/category/Chicken" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Chicken</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Dessert') }} to="#/category/Dessert" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Dessert</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Goat') }} to="#/category/Goat" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Goat</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Lamb') }} to="#/category/Lamb" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Lamb</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Miscellaneous') }} to="#/category/Miscellaneous" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Miscellaneous</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Pasta') }} to="#/category/Pasta" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Pasta</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Pork') }} to="#/category/Pork" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Pork</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Seafood') }} to="#/category/Seafood" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Seafood</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Side') }} to="#/category/Side" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Side</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Starter') }} to="#/category/Starter" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Starter</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Vegan') }} to="#/category/Vegan" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Vegan</NavLink>
          </li>
          <li >
            <NavLink onClick={(e) => { getCategoryMeals('Vegetarian') }} to="#/category/Vegetarian" className="inline-block py-1 px-4 border border-gray-400 rounded-3xl    hover:shadow-2xl shadow  hover:bg-gray-50 hover:text-gray-600 transition-all duration-500"> Vegetarian</NavLink>
          </li>
        </ul>

        <div className="md:hidden mt-4">
          <select
            value={selected}
            onChange={(e) => handleSelect(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded-lg"
          >
            <option value="All">All</option>
            <option value="Beef">Beef</option>
            <option value="BreakFast">BreakFast</option>
            <option value="Chicken">Chicken</option>
            <option value="Dessert">Dessert</option>
            <option value="Goat">Goat</option>
            <option value="Lamb">Lamb</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Pasta">Pasta</option>
            <option value="Pork">Pork</option>
            <option value="Seafood">Seafood</option>
            <option value="Side">Side</option>
            <option value="Starter">Starter</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
        </div>

      </div>


    </>
  );
}
