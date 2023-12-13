import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './scss/app.scss';
import MainPage from './mainPage/MainPage';
import MainHeader from './Header/MainHeader';
import ProductPage from './Page/ProductPage/ProductPage';
import PageNotFound from './components/PageNotFound';
import CartPage from './Page/CartPage/CartPage';
import HelpPage from './components/oldPage/helpPage/HelpPage';
import Registration from './components/registration';



// slider
import slidW3 from "./assets/img/slider/slider-w3.png";
import slidAW from "./assets/img/slider/slider-aw.png";
import slidCP from "./assets/img/slider/slider-cp.png";
import slidER from "./assets/img/slider/slider-er.png";

// import cardFiling from "./assets/componentData/cardFiling.json"; передача файлов из json - резерв

const AppContext = React.createContext('defaultValue'); // пока-что не использую


function App() {

  const sliderItems = { slidW3:slidW3, slidAW:slidAW, slidCP:slidCP, slidER:slidER };
  const cityList = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Казань', 'Ростов-на-Дону', 'Тула', 'Минск' ];
  const selectCategory = ['Все платформы','PC','Ps4','Ps5','switch','Xbox'];

  const [searchValue, setSearchValue] = React.useState(''); //результаты поиска
  const [cardFiling, setCardFiling] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); 

 // блок отображения модального окна регистрации  
const [registrationIsVisible, setRegistrationIsVisible] = React.useState(false)
const registrationShowHandler = () => { setRegistrationIsVisible(true); };
const registrationHideHandler = () => { setRegistrationIsVisible(false); };
//--------------------------------------------------



  // тут передаю информацию из выбора категорий и сортировки, проблема в том что я фактически 2 раза юзаю юз стайт в 9 видео есть как это обойти+ 
  // ПЕРЕДЕЛАТЬ
  const [category, setCategory] = React.useState(0);
  const [sort, setSort] = React.useState('Все платформы');
  const [currentPage, setCurrentPage] = React.useState(0);
  const saveCategoryHandler = (index) =>{setCategory(index);}; // данные из карточек cards
  const saveSortHandler = (index) =>{setSort(index);};  // данные из карточек cards
  const saveCurrentHandler = (index) =>{setCurrentPage(index) };   // данные из карточек cards
  const serverCategory = selectCategory[category]; // вытаскивания из массива название по индексу для поиска
  // --------------------

console.log(currentPage + '  ПРОБЛЕМА');

    React.useEffect(() => { //получение данных с сервера
      setIsLoading(true);
      const orderSort = sort.includes('-') ? `asc` : `desc`;
      const orderCategory = serverCategory === 'Все платформы' ? `` : `&platforms=${serverCategory}`;
      const orderRecovery = `page=${currentPage}&limit=5&`; // задаем сколько позиций будет отображаться при этом коде из корзины пропадают товары
      fetch(`https://65523e2c5c69a7790329c0eb.mockapi.io/items?${orderRecovery}sortBy=${sort.replace('-', '')}${orderCategory}&order=${orderSort}`)
      .then((res) => res.json())
      .then((arr) => {
        setCardFiling(arr);
        setIsLoading(false); 
      });
    }, [category, sort, currentPage]);




  return (
    <AppContext.Provider>
      <MainHeader searchValue={searchValue} onShowRegistration={registrationShowHandler} setSearchValue={setSearchValue} cityList={cityList}/>
      {registrationIsVisible && <Registration onHideRegistration={registrationHideHandler}/>}
      <Routes>
        <Route  path="" element={<MainPage
          onSaveCategory={saveCategoryHandler} onSaveSort={saveSortHandler} onSaveCurrent={saveCurrentHandler} 
          isLoading={isLoading}  cardFiling={cardFiling} sliderItems={sliderItems} 
          selectCategory={selectCategory} searchValue={searchValue}/>} />
               
        <Route  path="/p" element={<ProductPage />} />
        <Route  path='*' element={<PageNotFound />} />
        <Route  path='/cart' element={<CartPage cardFiling={cardFiling}/>} />
        <Route  path='/help' element={<HelpPage />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
