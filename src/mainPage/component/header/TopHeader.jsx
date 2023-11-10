
function TopHeader() {
    return (<div>
        <div className="header__top container">
            <nav className="header__top-left">
                <ul className="menu__list-left">
                    <li className="menu__item"><a href="" className="menu__link">Москва</a></li>
                    <li className="menu__item"><a href="" className="menu__link">Магазины</a></li>
                    <li className="menu__item"><a href="" className="menu__link">Оплата и доставка</a></li>
                </ul>
            </nav>
            <nav className="header__top-right">
                <ul className="menu__list-right">
                    <li className="menu__item text-orange"><a href="" className="menu__link">Акции</a></li>
                    <li className="menu__item"><a href="" className="menu__link">Trade-In</a></li>
                    <li className="menu__item"><a href="" className="menu__link">Новости</a></li>
                    <li className="menu__item"><a href="" className="menu__link">Обзоры</a></li>
                    <li className="menu__item"><a href="" className="menu__link">О нас</a></li>
                    <li className="menu__item"><a href="" className="menu__link">Статус заказа</a></li>
                </ul>
            </nav>
        </div>
    </div>
    );
  }
  
  export default TopHeader;