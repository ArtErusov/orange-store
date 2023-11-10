import CardItem from './CardItem';
import CardSelect from './CardSelect';

function Cards(props) {
  return (<div className='container '>
    <h2 className='grid__h2'>Хиты продаж</h2>
    <CardSelect />
    <div className="grid__card">
            <CardItem 
              src={props.cardFiling[0].src}
              label={props.cardFiling[0].label}
              discount={props.cardFiling[0].discount}
              price={props.cardFiling[0].price} 
              text={props.cardFiling[0].text} />
            <CardItem 
              src={props.cardFiling[1].src}
              label={props.cardFiling[1].label}
              discount={props.cardFiling[1].discount}
              price={props.cardFiling[1].price} 
              text={props.cardFiling[1].text} />
            <CardItem 
              src={props.cardFiling[2].src}
              label={props.cardFiling[2].label}
              discount={props.cardFiling[2].discount}
              price={props.cardFiling[2].price} 
              text={props.cardFiling[2].text} />
            <CardItem 
              src={props.cardFiling[3].src}
              label={props.cardFiling[3].label}
              discount={props.cardFiling[3].discount}
              price={props.cardFiling[3].price} 
              text={props.cardFiling[3].text} />
            <CardItem 
              src={props.cardFiling[4].src}
              label={props.cardFiling[4].label}
              discount={props.cardFiling[4].discount}
              price={props.cardFiling[4].price} 
              text={props.cardFiling[4].text} />
      </div>
   </div>
  );
}

export default Cards;