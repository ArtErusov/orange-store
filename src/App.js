import './scss/app.scss';
import MainPage from './mainPage/MainPage';
import React from 'react';

// карточки товара 1- сделать зачеркнутым ценник убрать плашку скидок когда нет информации
// slider
import slidW3 from "./assets/img/slider/slider-w3.png";
import slidAW from "./assets/img/slider/slider-aw.png";
import slidCP from "./assets/img/slider/slider-cp.png";
import slidER from "./assets/img/slider/slider-er.png";
import cardFiling from "./assets/componentData/cardFiling.json";




function App() {
  const sliderItems = {
    slidW3:slidW3,
    slidAW:slidAW,
    slidCP:slidCP,
    slidER:slidER
  }
const cityList = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Казань', 'Ростов-на-Дону', 'Тула', 'Минск' ];
const selectCategory = ['Все платформы','PC','Ps 4','Ps 5','switch','Xbox'];

// const [cardFiling, setCardFiling] = React.useState([]);

//     React.useEffect(() => {
//       fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/items')
//       .then((res) => res.json)
//       .then((arr) => {
//         setCardFiling(arr);
//       });
//     }, []);

  

  return (<div>
      <MainPage cardFiling={cardFiling} sliderItems={sliderItems} selectCategory={selectCategory} cityList={cityList}/>

   </div>
  );
}

export default App;
