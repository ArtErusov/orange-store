import React from 'react';
import CardItem from './component/CardItem';
import CardSelect from './CardSelect';
import CardSort from './CardSort';
import CardSceleton from './component/CardSceleton';


function Cards(props) {
  const saveCategoryHandler = (index) =>{ props.onSaveCategory(index) }; //передача на верх из CardSelect
  const saveSortHandler = (index) =>{ props.onSaveSort(index) };   //передача на верх из CardSort  
 
  const itemSceleton = [...new Array(10)].map((_, index) =><CardSceleton key={index} /> );


// console.log(props.cardFiling.text + ' кардс2');
    const cardItemsFilter = props.cardFiling?.map((item) => 
    <CardItem 
      key={item.id}
      src={item.src}
      label={item.label}
      discount={item.discount}
      platforms={item.platforms}
      price={item.price} 
      text={item.text} />);




  return (<div className='container '>
<div className="grid__media">
    <h2 className='grid__h2'>Хиты продаж</h2>   
    <div className='grid__flex'>

    <CardSelect onSaveCategory={saveCategoryHandler} selectCategory={props.selectCategory} />{/*передача на верх */}
    <CardSort onSaveSort={saveSortHandler} /> {/*передача на верх */}   
    </div>
</div>
    <div className="grid__card">
      {props.isLoading ? itemSceleton : cardItemsFilter}
      </div>
   </div>
  );
}

export default Cards;


