import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import MealDetails from "./components/mealDetails/MealDetails";

function App() {
  const [meals, setMeals] = useState([]);
  const [details, setDetails] = useState([]);

  async function getdata() {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    setMeals(data.meals);
  }

  async function getCategoryMeals(cat) {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );
    setMeals(data.meals);
  }

  async function getdetails(id) {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setDetails(data.meals[0]);
    console.log(data.meals);
  }

  useEffect(() => {
    getdata();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Home
              meals={meals}
              getdata={getdata}
              getCategoryMeals={getCategoryMeals}
              getdetails={getdetails}
            />
          ),
        },
        {
          path: "mealdetails/:id",
          element: <MealDetails details={details} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
