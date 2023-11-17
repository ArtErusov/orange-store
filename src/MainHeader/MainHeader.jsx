import BodyHeader from "./BodyHeader";
import TopHeader from "./TopHeader";




function MainHeader(props) { 
  return (<div>
    <TopHeader cityList={props.cityList} />
    <BodyHeader searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
  </div>
  );
}

export default MainHeader;