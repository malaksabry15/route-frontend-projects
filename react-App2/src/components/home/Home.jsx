import React from 'react'
import Card from '../card/card'
import Header from '../header/Header'

const Home = ({meals ,getdata,getCategoryMeals,getdetails}) => {
  return <>
  
 <Header getdata={getdata } getCategoryMeals={getCategoryMeals}/>
  <Card meals={meals} getdetails={getdetails} />;

  </>
}

export default Home
