import MainHeader from './component/header/MainHeader';
import Slider from './component/slider/Slider';
import Cards from './component/Cards/Cards'

function MainPage(props) {
  return (<div>
      <MainHeader />
      <Slider sliderItems={props.sliderItems} />
      <Cards cardFiling={props.cardFiling} />
   </div>
  );
}

export default MainPage;
