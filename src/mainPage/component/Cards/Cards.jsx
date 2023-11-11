import CardItem from './CardItem';
import CardSelect from './CardSelect';

function Cards(props) {

 

  return (<div className='container '>
    <h2 className='grid__h2'>Хиты продаж</h2>
    <CardSelect selectCategory={props.selectCategory} />
    <div className="grid__card">
        {props.cardFiling.map((item) => 
            <CardItem 
              // key={item.src}
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