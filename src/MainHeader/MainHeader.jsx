import BodyHeader from "./BodyHeader";
import TopHeader from "./TopHeader";
import React, {Fragment} from 'react';


function MainHeader(props) { 
  return (<Fragment>
    <TopHeader 
      cityList={props.cityList} 
    />
    <BodyHeader 
      searchValue={props.searchValue} 
      setSearchValue={props.setSearchValue} 
      onShowRegistration={props.onShowRegistration} 
    />
  </Fragment>
  );
}

export default MainHeader;