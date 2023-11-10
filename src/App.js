import './scss/app.scss';
import MainPage from './mainPage/MainPage';
// card img
import valhalla from "./assets/img/card/valhalla.png"
import cybpanc from "./assets/img/card/cybpanc.png"
import mc2 from "./assets/img/card/mc2.png"
import rdr2 from "./assets/img/card/rdr2.png"
import biomutant from "./assets/img/card/biomutant.png"
// slider
import slidW3 from "./assets/img/slider/slider-w3.png";
import slidAW from "./assets/img/slider/slider-aw.png";
import slidCP from "./assets/img/slider/slider-cp.png";
import slidER from "./assets/img/slider/slider-er.png";



function App() {
  const sliderItems = {
    slidW3:slidW3,
    slidAW:slidAW,
    slidCP:slidCP,
    slidER:slidER
  }

  const cardFiling = [
  {
    //пока что не совсем понимаю как передать картинку без импорта поэтому пока что будет так
    src: valhalla,
    label: "38%",
    discount: "3̶3̶5̶0̶ ̶₽̶ ",
    price: "2950 ₽",
    text: "Игра для PlayStation 4/5 Ubisoft Assassin's Creed: Вальгалла"
    },
  {src: cybpanc,
    label: "40%",
    discount: "3̶3̶5̶0̶ ̶₽̶ ",
    price: "2950 ₽",
    text: "Игра для PlayStation 4/5 Ubisoft Assassin's Creed: Вальгалла"
  },
  {src: mc2,
    label: "38%",
    discount: "3̶3̶5̶0̶ ̶₽̶ ",
    price: "2950 ₽",
    text: "Игра для PlayStation 4/5 Ubisoft Assassin's Creed: Вальгалла"
    },
  {src: rdr2,
    label: "38%",
    discount: "3̶3̶5̶0̶ ̶₽̶ ",
    price: "2950 ₽",
    text: "Игра для PlayStation 4/5 Ubisoft Assassin's Creed: Вальгалла"
  },
  {src: biomutant,
    label: "38%",
    discount: "3̶3̶5̶0̶ ̶₽̶ ",
    price: "2950 ₽",
    text: "Игра для PlayStation 4/5 Ubisoft Assassin's Creed: Вальгалла"
  }
    ]

  return (<div>
      <MainPage cardFiling={cardFiling} sliderItems={sliderItems}/>
   </div>
  );
}

export default App;
