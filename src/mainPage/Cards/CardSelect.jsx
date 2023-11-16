import React from "react";

const CardSelect = (props) =>{

    const [activeIndex, setActiveIndex] = React.useState(0)

    const onClickCategory = (index) => { //присваивание нового индекса
        setActiveIndex(index);
    }
       props.onSaveCategory(activeIndex); //передаю на верх




    return(<div className="categories">
        <ul>
            {props.selectCategory.map((value, indexItem) => 
            <li key={indexItem} onClick={() => onClickCategory(indexItem)} className={activeIndex === indexItem ? 'active': ''}>{value}</li>
            // <li onClick={() => setActiveIndex(indexItem)} className={activeIndex === indexItem ? 'active': ''}>{value}</li>
            //альтернативное написание заменяющее const onClickCategory
            )}
        </ul>
        
    </div>);
   
}

export default CardSelect
