import './scss/app.scss';
import MainPage from './mainPage/MainPage';
import MainHeader from './MainHeader/MainHeader';
import ProductPage from './ProductPage/ProductPage';
import NotFound from './otherPage/NotFound';
import CartPage from './CartPage/CartPage';

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// карточки товара 1- сделать зачеркнутым ценник 


// slider
import slidW3 from "./assets/img/slider/slider-w3.png";
import slidAW from "./assets/img/slider/slider-aw.png";
import slidCP from "./assets/img/slider/slider-cp.png";
import slidER from "./assets/img/slider/slider-er.png";

// передача файлов из json
// import cardFiling from "./assets/componentData/cardFiling.json";




function App() {
  const sliderItems = {
    slidW3:slidW3,
    slidAW:slidAW,
    slidCP:slidCP,
    slidER:slidER
  }
const cityList = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Казань', 'Ростов-на-Дону', 'Тула', 'Минск' ];
const selectCategory = ['Все платформы','PC','Ps 4','Ps 5','switch','Xbox'];

  const [cardFiling, setCardFiling] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setCardFiling(arr);
        setIsLoading(false);
      });
    }, []);

  return (<div>
      <MainHeader cityList={cityList}/>

      <Routes>
         <Route  path="" element={<MainPage isLoading={isLoading}  cardFiling={cardFiling} sliderItems={sliderItems} selectCategory={selectCategory}/>} />
         <Route  path="/p" element={<ProductPage />} />
         <Route  path='*' element={<NotFound />} />
         <Route  path='/cart' element={<CartPage />} />

      </Routes>
   </div>
  );
}

export default App;
