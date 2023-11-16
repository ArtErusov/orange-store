import React from "react";


const CardSort = (props) => {
const [visible, setVisible] = React.useState(false);
const [selected, setSelected] = React.useState(0);
// const sortList = ['популярности', 'рейтингу', 'цене', 'алфавиту'];
// const sortListTransform = ['id', 'id', 'price', 'text'];

const sortList = ['популярности', 'рейтингу по возрастанию', 'рейтингу по убыванию', 'цене по возрастанию', 'цене по убыванию', 'алфавиту по возрастанию', 'алфавиту по убыванию'];
const sortListTransform = ['id', 'id', '-id', 'price', '-price', 'text', '-text'];





const onClickHide =(i) => {
    setSelected(i);
    setVisible(false);
};

props.onSaveSort(sortListTransform[selected]);
// Получилось!!! теперь я передаю вместо sortList аналогичное по id значение в sortListTransform которое сможет принять сервер



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
            )};
        </ul>    
    </div>
    )}
</div> 
    </div>);
}

export default CardSort;