import {BrowserRouter, Route, Routes} from "react-router-dom";
import style from './CartPage.module.scss';
import CartProduct from "./CartProduct";

const CartPage = () => {
    return(<div className={style.container}>
        <h2>Оформление заказа</h2>
        <div className={style.container__right}></div>
        <div className={style.container__left}>
        <CartProduct />
        </div>
    </div>
    )
}

export default CartPage;