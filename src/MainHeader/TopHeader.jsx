import SelectCity from "./SelectCity";


function TopHeader({cityList}) {
    return (<div className="container">
        <div className="headerTop">
            <nav>
                <ul className="headerTop__left">
                    <li className="menu__item">
                    <SelectCity cityList={cityList}/>
                    </li>
                    <li className="menu__item"><a href="">Магазины</a></li>
                    <li className="menu__item"><a href="">Оплата и доставка</a></li>
                </ul>
            </nav>



            <nav>
                <ul className="headerTop__right">
                    <li className="menu__item"><a href="http://localhost:3000/P" className="shares">Акции</a></li>
                    <li className="menu__item"><a href="">Trade-In</a></li>
                    <li className="menu__item"><a href="">Новости</a></li>
                    <li className="menu__item"><a href="">Обзоры</a></li>
                    <li className="menu__item"><a href="">О нас</a></li>
                    <li className="menu__item"><a href="">Статус заказа</a></li>
                </ul>
            </nav>
        </div>
    </div>
    );
  }
  
  export default TopHeader;