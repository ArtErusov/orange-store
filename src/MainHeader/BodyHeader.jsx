import { Link } from "react-router-dom";
import Search from "./component/Search";
import styles from './header.module.scss';

import IconLogo from "../assets/icons/header/IconLogo";
import IconCatalog from "../assets/icons/header/IconCatalog";
import IconHeaderCart from "../assets/icons/header/IconHeaderCart";
import IconHeaderLogin from "../assets/icons/header/IconHeaderLogin";
import IconHeaderSelect from "../assets/icons/header/IconHeaderSelect";
// Проработать: поиск, каталогб, избранное

function BodyHeader(props) {
    return (
      <div className={styles.bodyHead + ' ' + styles.container}>

        <Link to="http://localhost:3000/"><IconLogo /></Link>

        <button className={styles.bodyHead__btn}><IconCatalog />Каталог</button>

        <Search searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>

        <div className={styles.bodyHead__action}>
          <Link to="http://localhost:3000/cart" className={styles.bodyHead__action_select} >
            <IconHeaderSelect />  
            <div>Избранное</div>
          </Link>
          <Link to="http://localhost:3000/cart" className={styles.bodyHead__action_cart}>
            <IconHeaderCart />
            <div>Корзина</div>
          </Link>
          <Link to="http://localhost:3000/cart" className={styles.bodyHead__action_login} >
            <IconHeaderLogin />
            <div>Войти</div>
          </Link>
        </div>
      </div>
    );
  }
  
  export default BodyHeader;
  