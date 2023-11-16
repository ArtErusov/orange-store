import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './scss/app.scss';
import MainPage from './mainPage/MainPage';
import MainHeader from './MainHeader/MainHeader';
import ProductPage from './ProductPage/ProductPage';
import NotFound from './otherPage/NotFound';
import CartPage from './CartPage/CartPage';


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
  };

  const cityList = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Казань', 'Ростов-на-Дону', 'Тула', 'Минск' ];
  const selectCategory = ['Все платформы','PC','Ps4','Ps5','switch','Xbox'];


  const [cardFiling, setCardFiling] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  // тут передаю информацию из выбора категорий и сортировки, проблема в том что я фактически 2 раза юзаю юз стайт в 9 видео есть как это обойти+ 
  const [category, setCategory] = React.useState(0);
  const [sort, setSort] = React.useState('Все платформы');
  const saveCategoryHandler = (index) =>{setCategory(index);}; // данные из карточек
  const saveSortHandler = (index) =>{setSort(index);};  // данные из карточек
  const serverCategory = selectCategory[category];
  // --------------------


    React.useEffect(() => {
      setIsLoading(true);
      fetch(`https://65523e2c5c69a7790329c0eb.mockapi.io/items?sortBy=${sort.replace('-', '')}${serverCategory === 'Все платформы' ? `` : `&platforms=${serverCategory}`}&order=desc`)


      // fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/items?sortBy=price&order=desc') сортировка по цене от большего к меньшему
      // fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/items?sortBy=price&order=asc') от меньшего к большему
      .then((res) => res.json())
      .then((arr) => {
        setCardFiling(arr);
        setIsLoading(false);
      });
    }, [category, sort]);





  return (<div>
      <MainHeader cityList={cityList}/>
      <Routes>
         <Route  path="" element={<MainPage onSaveCategory={saveCategoryHandler} onSaveSort={saveSortHandler} 
         isLoading={isLoading}  cardFiling={cardFiling} sliderItems={sliderItems} selectCategory={selectCategory}/>} />
         <Route  path="/p" element={<ProductPage />} />
         <Route  path='*' element={<NotFound />} />
         <Route  path='/cart' element={<CartPage cardFiling={cardFiling}/>} />
      </Routes>
   </div>
  );
}

export default App;
