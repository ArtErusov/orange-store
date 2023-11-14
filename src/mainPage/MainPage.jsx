import Slider from './slider/Slider';
import Cards from './Cards/Cards'



function MainPage(props) {

  return (<div>
      <Slider sliderItems={props.sliderItems} />
      <Cards isLoading={props.isLoading} cardFiling={props.cardFiling} selectCategory={props.selectCategory} />
   </div>
  );
}

export default MainPage;
