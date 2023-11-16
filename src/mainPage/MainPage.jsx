import Slider from './slider/Slider';
import Cards from './Cards/Cards'



function MainPage(props) {

// const saveCategoryHandler = (index) =>{console.log(index + ' ' + 'мэйнПэйдж');};
// const saveSortHandler = (index) =>{console.log(index + ' ' + 'мэйнПэйдж');};
const saveCategoryHandler = (index) =>{ props.onSaveCategory(index) }; //передача на верх из CardSelect
const saveSortHandler = (index) =>{ props.onSaveSort(index) };   //передача на верх из CardSort 

  return (<div>
      <Slider sliderItems={props.sliderItems} />
      <Cards onSaveCategory={saveCategoryHandler} onSaveSort={saveSortHandler} isLoading={props.isLoading} cardFiling={props.cardFiling} selectCategory={props.selectCategory} />
   </div>
  );
}

export default MainPage;
