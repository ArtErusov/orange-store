import game from"./valhalla.png";

const ProductCard = () =>{
return(<div className="card">
    <div className="card__top"> 
        <a href="#" className="card__top-img"><img src={game} alt="" /></a>
        <div className="card__top-label">34%</div> 
    </div>


    <div className="card__bottom">
        <div className="card__prices">
            <div className="card__prices-common">2950 ₽</div>
            <div className="card__prices-discount"> ̶3̶3̶5̶0̶ ̶₽̶  </div>
        </div>
        <p className="card__title">Игра для PlayStation 4/5 <br/> Ubisoft Assassin's Creed: Вальгалла</p>
    </div>
    <div>
    <button className="card__buy" >Купить</button>
    </div>
    </div>
);
}

export default ProductCard;