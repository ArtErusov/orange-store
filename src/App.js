import './scss/app.scss';
import MainPage from './mainPage/MainPage';


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
// ------------------fix 1-----------
//   const newArray = cardFiling.map(ellement => ellement)

//   console.log(newArray)
//   -------------------------------
  const selectCategory = ['Все платформы','PC','Ps 4','Ps 5','switch','Xbox'];

  return (<div>
      <MainPage cardFiling={cardFiling} sliderItems={sliderItems} selectCategory={selectCategory}/>

   </div>
  );
}

export default App;
