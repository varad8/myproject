import React from "react";


const NavigationButton = (props) => {
  return (
    <>
    <div class="flex">
        <div class="card">
            <img src={props.image} className="card-img" alt=""/>
            <h3>{props.name}</h3>
            <button className="btn">Order Now</button>
        </div>
        </div>
    </>
  );
};

export default NavigationButton;

