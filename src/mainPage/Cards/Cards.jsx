import React from 'react';
import CardItem from './CardItem';
import CardSelect from './CardSelect';
import CardSort from './CardSort';
import CardSceleton from './CardSceleton';


function Cards(props) {


  return (<div className='container '>
<div className="grid__media">
    <h2 className='grid__h2'>Хиты продаж</h2>   
    <div className='grid__flex'>
      <CardSelect selectCategory={props.selectCategory} />
      <CardSort />
    </div>
</div>
    <div className="grid__card">
      {props.isLoading ? [...new Array(10)].map((_, index) =><CardSceleton key={index} /> )
      : props.cardFiling?.map((item) => 
            <CardItem 
              key={item.id}
              src={item.src}
              label={item.label}
              discount={item.discount}
              platforms={item.platforms}
              price={item.price} 
              text={item.text} />)}
      </div>
   </div>
  );
}

{/* <div className="grid__card">
{props.cardFiling?.map((item) => (isLoading ? <CardSceleton /> : 
    <CardItem 
      key={item.id}
      src={item.src}
      label={item.label}
      discount={item.discount}
      platforms={item.platforms}
      price={item.price} 
      text={item.text} /> */}
export default Cards;


