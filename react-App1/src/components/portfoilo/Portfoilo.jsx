import React, { useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import portfoiloStyle from "../portfoilo/portfoilo.module.css";

const Portfoilo = () => {
  const [image, setImage] = useState(null);

  return (
    <>
      <div className={`text-center mb-5 position-relative`} style={{ marginTop: "86px" }}>
        <div className={`container   `} >
          <div>
            <h2 className=" mb-2 pt-5 text-center fw-bolder fs-1 text-uppercase ">
              portfolio component
            </h2>
            <div className="my-3 d-flex align-items-center justify-content-center">
              <div className={`${portfoiloStyle.line}`}></div>
              <i class={`fa-solid fa-star ${portfoiloStyle.star}`}></i>
              <div className={`${portfoiloStyle.line}`}></div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-4">
              <div className="inner position-relative ">
                <img src={img1} alt="poert1" className="w-100 rounded-2"  />
                <div
                  className={`layer d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 opacity-0 rounded-2 ${portfoiloStyle.layer}`} onClick={()=>{setImage(img1)}}
                >
                  <i class="fa-solid fa-plus fa-5x text-white "></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner position-relative">
                <img src={img2} alt="port2" className="w-100 rounded-2" />
                <div
                  className={`layer d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 opacity-0 rounded-2 ${portfoiloStyle.layer}`} onClick={()=>{setImage(img2)}}
                >
                  <i class="fa-solid fa-plus fa-5x text-white "></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner position-relative">
                <img src={img3} alt="port3" className="w-100 rounded-2" />
                <div
                  className={`layer d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 opacity-0 rounded-2 ${portfoiloStyle.layer}`} onClick={()=>{setImage(img3)}}
                >
                  <i class="fa-solid fa-plus fa-5x text-white "></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner position-relative">
                <img src={img1} alt="poert1" className="w-100 rounded-2" />
                <div
                  className={`layer d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 opacity-0 rounded-2 ${portfoiloStyle.layer}`} onClick={()=>{setImage(img1)}}
                >
                  <i class="fa-solid fa-plus fa-5x text-white "></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner position-relative">
                <img src={img2} alt="port2" className="w-100 rounded-2" />
                <div
                  className={`layer d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 opacity-0 rounded-2 ${portfoiloStyle.layer}`} onClick={()=>{setImage(img2)}}
                >
                  <i class="fa-solid fa-plus fa-5x text-white "></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner position-relative">
                <img src={img3} alt="port3" className="w-100 rounded-2" />
                <div
                  className={`layer d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 opacity-0 rounded-2 ${portfoiloStyle.layer}`} onClick={()=>{setImage(img3)}}
                >
                  <i class="fa-solid fa-plus fa-5x text-white "></i>
                </div>
              </div>
            </div>
          </div>
         
         
        </div> 
        {image&&  <div className={` position-fixed top-0 w-100   h-100 z-3 ${image? portfoiloStyle.imageBg :"bg-transparent"} `}    onClick={()=>{setImage(null)}}>
            <div className={`${portfoiloStyle.image} image `} >
        <img src={image} alt="" className={` w-100  `}  onClick={(e)=>{e.stopPropagation()}} />
        </div>
      </div>
      }
      </div>





     
    </>
  );
};

export default Portfoilo;
