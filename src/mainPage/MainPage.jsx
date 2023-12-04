import Slider from './slider/Slider';
import Cards from './Cards/Cards'
import React, {Fragment} from 'react';



function MainPage(props) {

const saveCategoryHandler = (index) =>{ props.onSaveCategory(index) }; //передача на верх из CardSelect
const saveSortHandler = (index) =>{ props.onSaveSort(index) };   //передача на верх из CardSort 
const saveCurrentHandler = (index) =>{ props.onSaveCurrent(index) };   //передача на верх из Pagiation


  return (<Fragment>
      <Slider sliderItems={props.sliderItems} />
      <Cards searchValue={props.searchValue} onSaveCategory={saveCategoryHandler} onSaveSort={saveSortHandler}

      onSaveCurrent={saveCurrentHandler}
      
      isLoading={props.isLoading} cardFiling={props.cardFiling} selectCategory={props.selectCategory} />
   </Fragment>
  );
}

export default MainPage;
