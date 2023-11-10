import React from "react";

const CardSelect = () =>{

    const [activeIndex, setActiveIndex] = React.useState(0)
 
    const onClickCategory = (index) => {
        setActiveIndex(index);
    }

    return(<div className="categories">
        <ul>
            <li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? 'active': ''}>Все платформы</li>
            <li onClick={() => onClickCategory(1)} className={activeIndex === 1 ? 'active': ''}>PC</li>
            <li onClick={() => onClickCategory(2)} className={activeIndex === 2 ? 'active': ''}>Ps 4</li>
            <li onClick={() => onClickCategory(3)} className={activeIndex === 3 ? 'active': ''}>Ps 5</li>
            <li onClick={() => onClickCategory(4)} className={activeIndex === 4 ? 'active': ''}>switch</li>
            <li onClick={() => onClickCategory(5)} className={activeIndex === 5 ? 'active': ''}>Xbox</li>
        </ul>
    </div>);
}

export default CardSelect;