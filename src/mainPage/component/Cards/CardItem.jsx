import React, { useState } from "react";
const CardItem = ({src, label, platforms, price, discount, text  }) =>{

const [activeType, setActiveType] = React.useState(0);

return(<div className="card">
    
    
    <div className="card__top"> 
        <a href="#" className="card__top-img"><img src={src} alt="" /></a>
        <div className="card__top-label">{label}</div> 
    </div>
    <div className="card__platforms">
        <ul>
            {/* ?проверяет есть ли массив */}
            {/* !!!!работает не корректно!!! не активирует нужный селектор */}
            {platforms.map((size, index) => (
            <li onClick={() => setActiveType(index)} className={"activeType === index" ? 'active' : ''}>{size}</li>))}
        </ul>
    </div>

    <div className="card__bottom">
        <div className="card__prices">
            <div className="card__prices-common">{price}</div>
            <div className="card__prices-discount">{discount}</div>
        </div>
        <p className="card__title">{text}</p>

    </div>
    <div>
    <button className="card__buy">Купить</button>
    </div>
    </div>
);
}

export default CardItem;