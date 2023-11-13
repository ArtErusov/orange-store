import CardItem from './CardItem';
import CardSelect from './CardSelect';
import CardSort from './CardSort';


function Cards(props) {

 

  return (<div className='container '>

    <h2 className='grid__h2'>Хиты продаж</h2>
    
<div className='grid__flex'>
  <CardSelect selectCategory={props.selectCategory} />
  <CardSort />
</div>

    <div className="grid__card">
        {props.cardFiling?.map((item) => 
            <CardItem 
              key={item.id}
              src={item.src}
              label={item.label}
              discount={item.discount}
              platforms={item.platforms}
              price={item.price} 
              text={item.text} />
            )}
      </div>
   </div>
  );
}

export default Cards;