import React from "react";
import { useParams } from "react-router-dom";


const MealDetails = ({ details }) => {
  const { id } = useParams();



  let ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = details[`strIngredient${i}`];
    const measure = details[`strMeasure${i}`];

    if (!ingredient || ingredient.trim() === "") break;

    ingredients.push({ ingredient, measure });
  }

  return (
    <div className="p-6 sm:ml-64 bg-[#f4f2ee] min-h-screen">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4">
          
          <div className="lg:w-2/3">

                    <h1 className="text-5xl font-semibold mb-4 font-Pacifico">{details.strMeal}</h1>
<div class="grid gap-4 items-stretch lg:grid-cols-2">
<div>
            <img
              src={details.strMealThumb}
              alt={details.strMeal}
              className="mb-8 rounded-2xl w-full"
            />

            <ul className="flex gap-4 justify-center mb-6">
              <li className="bg-red-600 text-white py-2 px-4">
                <a
                  href={details.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  Youtube
                </a>
              </li>

              <li className="bg-emerald-500 text-white py-2 px-4">
                <a
                  href={details.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  Source
                </a>
              </li>
            </ul>
            </div>

            <p>{details.strInstructions}</p>
          </div>
          </div>

          <div className="lg:w-1/3 p-4">
            <div className="bg-white rounded-2xl p-4">
              <h3 className="text-2xl font-semibold mb-4 border-b-4 p-2 border-b-neutral-200">
                Ingredients
              </h3>

              {ingredients.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between p-2 border-b-2 last:border-b-0  border-b-neutral-200"
                >
                  <span>{item.ingredient}</span>
                  <span>{item.measure}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MealDetails;
