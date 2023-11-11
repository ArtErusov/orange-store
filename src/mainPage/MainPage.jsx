import MainHeader from './component/header/MainHeader';
import Slider from './component/slider/Slider';
import Cards from './component/Cards/Cards'



function MainPage(props) {
const selectCategory = ['Все платформы','PC','Ps 4','Ps 5','switch','Xbox'];

  return (<div>
      <MainHeader />
      <Slider sliderItems={props.sliderItems} />
      <Cards cardFiling={props.cardFiling} selectCategory={props.selectCategory} />
   </div>
  );
}

export default MainPage;
