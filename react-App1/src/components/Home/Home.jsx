import React from "react";
import  HomeStyle from "../Home/home.module.css";
import image from "../../images/avataaars.svg";
const Home = () => {
  return (
    <div
      className={`${HomeStyle.header} text-center text-white pb-3 `}
      style={{ height: "80vh", marginTop: "86px" }}
    >
      <img src={image} alt="" style={{ width: "200px" }} className=" mt-5 " />
      
      <div>
        <h2
          className={`my-1 pt-5 text-center fw-bolder fs-2 text-uppercase text-white ${HomeStyle.h2}`}
        >
          start Framework
        </h2>
        <div className="my-3 d-flex align-items-center justify-content-center">
          <div className={`${HomeStyle.line}`}></div>
          <i class="fa-solid fa-star"></i>
          <div className={`${HomeStyle.line}`}></div>
        </div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
};

export default Home;
