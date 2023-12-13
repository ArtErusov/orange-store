import SelectCity from "./component/SelectCity";
import { Link } from "react-router-dom";
import React from "react";
import styles from './header.module.scss';

function TopHeader(props) {
    return (<React.Fragment>
        <div className={styles.container + ' ' + styles.headerTop} >
            <nav>
                <ul className={styles.headerTop__left}>
                    <li className={styles.menu__item}>
                    <SelectCity cityList={props.cityList}/>
                    </li>
                    <li className={styles.menu__item}><Link to="http://localhost:3000/non">Магазины</Link></li>
                    <li className={styles.menu__item}><Link to="http://localhost:3000/non">Оплата и доставка</Link></li>
                </ul>
            </nav>

            <nav>
                <ul className={styles.headerTop__right}>
                    <li className={styles.menu__item}><Link to="http://localhost:3000/P" className={styles.shares}>Акции</Link></li>
                    <li className={styles.menu__item}><Link to="http://localhost:3000/non">Trade-In</Link></li>
                    <li className={styles.menu__item}><Link to="http://localhost:3000/non">Новости</Link></li>
                    <li className={styles.menu__item}><Link to="http://localhost:3000/help">Поддержка</Link></li>
                    <li className={styles.menu__item}><Link to="http://localhost:3000/non">О нас</Link></li>
                    <li className={styles.menu__item}><Link to="http://localhost:3000/non">Статус заказа</Link></li>
                </ul>
            </nav>
        </div>
    </React.Fragment>
    );
  }
  
  export default TopHeader;