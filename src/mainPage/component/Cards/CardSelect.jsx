import React from "react";

const CardSelect = ({selectCategory}) =>{

    const [activeIndex, setActiveIndex] = React.useState(0)

    const onClickCategory = (index) => {
        setActiveIndex(index);
    }

    return(<div className="categories">
        <ul>
            {selectCategory.map((value, indexItem) => 
            <li key={indexItem} onClick={() => onClickCategory(indexItem)} className={activeIndex === indexItem ? 'active': ''}>{value}</li>
            // <li onClick={() => setActiveIndex(indexItem)} className={activeIndex === indexItem ? 'active': ''}>{value}</li>
            //альтернативное написание заменяющее const onClickCategory
            )}
        </ul>
    </div>);
}

export default CardSelect
