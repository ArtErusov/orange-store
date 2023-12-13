import {BrowserRouter, Route, Routes} from "react-router-dom";
import style from './CartPage.module.scss';

const CartProduct = (props) => {
    return(<div className={style.product} >
        <div className={style.product__left}>
            <a href="#"><img className={style.product__img} src={props.src} alt="фото товара" /></a>
            <div className={style.product__left_text}>
                <p>{props.text}</p>
                <div className={style.product__left_text_flex}>
                    <p>Код товара:</p>
                    {/* вставить ссылку на карточку товара */}
                    <a href="#">{props.id}</a>
                </div>
            </div>
        </div>

        <div className={style.product__right}>
            {/* delit- заглушка */}
             <div className={style.product__right_delit}>удалить</div>
            <button className={style.product__right_plus}>-</button>
            <div className={style.product__right_number}>1</div>
            <button className={style.product__right_minus}>+</button>
        <div className={style.product__right_price}>{props.price}</div>


        </div>    


    </div>
    )
}

export default CartProduct; 
