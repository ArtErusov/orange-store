import React, { useState } from "react";

//https://www.youtube.com/watch?v=SK9AlIbexOE

// const[currentIndex, setcurrentUser] = useState(0);
const Slider = ({sliderItems}) =>{

  // slidW3  slidAW slidCP slidER
    return(<div className="container">



        <img className="main__slider" src={sliderItems.slidAW} alt="slidAW" />  
        </div>
    );
}

export default Slider;