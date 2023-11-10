import React, { useState } from "react";
const CardItem = (props) =>{


 //-----------тестовый билд----------------
const[clickUser, setClickUser] = useState(0);

const clickСounter = () =>{
    console.log('gegshrf');
    setClickUser(clickUser + 1);
};
//------------------------------------------

return(<div className="card">
    <div className="card__top"> 
        <a href="#" className="card__top-img"><img src={props.src} alt="" /></a>
        <div className="card__top-label">{props.label}</div> 
    </div>
    <div className="card__bottom">
        <div className="card__prices">
            <div className="card__prices-common">{props.price}</div>
            <div className="card__prices-discount">{props.discount}</div>
        </div>
        <p className="card__title">{props.text}</p>
    </div>
    <div>
    <p>Счетчик тест = {clickUser}</p>
    <button onClick={clickСounter} className="card__buy">Купить</button>
    </div>
    </div>
);
}

export default CardItem;