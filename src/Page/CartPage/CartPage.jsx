import {BrowserRouter, Route, Routes} from "react-router-dom";
import style from './CartPage.module.scss';
import CartProduct from "./CartProduct";

const CartPage = (props) => {
    return(<div className={style.container}>
        <h2>Оформление заказа</h2>
        <div className={style.container__right}></div>




        <div className={style.container__left}>
        {props.cardFiling?.map((item) =>(
        <CartProduct 
        key={item.id}
        id={item.id}
        src={item.src}
        label={item.label}
        discount={item.discount}
        platforms={item.platforms}
        price={item.price} 
        text={item.text}/>
        ))}
        </div>
    </div>
    )
}

export default CartPage;
