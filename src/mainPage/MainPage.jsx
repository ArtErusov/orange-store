import MainHeader from './component/header/MainHeader';
import Slider from './component/slider/Slider';
import Cards from './component/Cards/Cards'



function MainPage(props) {

  return (<div>
      <MainHeader cityList={props.cityList}/>
      <Slider sliderItems={props.sliderItems} />
      <Cards cardFiling={props.cardFiling} selectCategory={props.selectCategory} />
   </div>
  );
}

export default MainPage;
