import SelectCity from "./component/SelectCity";
import { Link } from "react-router-dom";

function TopHeader({cityList}) {
    return (<div className="container">
        <div className="headerTop">
            <nav>
                <ul className="headerTop__left">
                    <li className="menu__item">
                    <SelectCity cityList={cityList}/>
                    </li>
                    <li className="menu__item"><Link to="http://localhost:3000/non">Магазины</Link></li>
                    <li className="menu__item"><Link to="http://localhost:3000/non">Оплата и доставка</Link></li>
                </ul>
            </nav>



            <nav>
                <ul className="headerTop__right">
                    <li className="menu__item"><Link to="http://localhost:3000/P" className="shares">Акции</Link></li>
                    <li className="menu__item"><Link to="http://localhost:3000/non">Trade-In</Link></li>
                    <li className="menu__item"><Link to="http://localhost:3000/non">Новости</Link></li>
                    <li className="menu__item"><Link to="http://localhost:3000/help">Поддержка</Link></li>
                    <li className="menu__item"><Link to="http://localhost:3000/non">О нас</Link></li>
                    <li className="menu__item"><Link to="http://localhost:3000/non">Статус заказа</Link></li>
                </ul>
            </nav>
        </div>
    </div>
    );
  }
  
  export default TopHeader;