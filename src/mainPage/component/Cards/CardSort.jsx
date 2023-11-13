import React from "react";


const CardSort = () => {
const [visible, setVisible] = React.useState(false);
const [selected, setSelected] = React.useState(0);
const sortList = ['популярности', 'рейтингу', 'цене', 'алфавиту']

const onClickHide =(i) => {
    setSelected(i);
    setVisible(false);
};


    return (<div>
 <div class="sort">
    <div class="sort__label">
        <b>Сортировка по:</b>
        <span onClick={()=>setVisible(!visible)}>{sortList[selected]}</span>
    </div>
    {visible &&  (
        <div class="sort__popup">
        <ul>
            {sortList.map((name, index) =>
            <li 
            key={index}
            onClick={() => onClickHide(index)}
            className={selected === index ? 'active' : ''}>
                {name}
            </li>
            )}
        </ul>    
    </div>
    )}
</div> 
    </div>);
}

export default CardSort;