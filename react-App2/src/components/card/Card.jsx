
        

import React, { useEffect } from 'react'
import logo from "../../assets/images/logo-BfNap0Pe.png";
import { Link } from 'react-router-dom';


const Card = ({meals,getdetails}) => {
    
       
   
    
    
  return<>
   <div className='p-4 sm:ml-64 bg-[#f4f2ee]'>
  <div className="container">
  <div className='my-10 p-4 border-1 border-default border-dashed rounded-base'>
    
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-20 mb-4">

   {meals.map((meal)=>{
    return (
                <div key={meal.idMeal}  className=" bg-white text-center p-12 pb-4  rounded-4xl hover:shadow-xl hover:scale-105  transition-all duration-500 group ">
                     <img src={meal.strMealThumb} alt="" className=" w-full -translate-y-20 rounded-full group-hover:rotate-360 transition-all duration-700" />
                   <h3 className=' -mt-12 font-semibold ' >{meal.strMeal}</h3>
                  {meal.strArea&& <h5 className="mb-5 flex justify-center items-center gap-2 text-emerald-600"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path></svg>
                   {meal.strArea}</h5>}
                   <button  className=" mb-5 mt-3 text-white font-semibold  bg-emerald-500 py-2 px-8  rounded-3xl hover:scale-105 hover:bg-emerald-600 hover:shadow-lg transition-all duration-500 ">
                    <Link to={`/mealdetails/${meal.idMeal}`} onClick={()=>{getdetails(`${meal.idMeal}`)}}  >View Recipe</Link></button>
                </div>
            
        




    )
   })} 
  </div>
  </div>
  </div>
  </div>
  </>
} 

export default Card
