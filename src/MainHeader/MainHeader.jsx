import BodyHeader from "./BodyHeader";
import TopHeader from "./TopHeader";

function MainHeader(props) {
  return (<div>
    <TopHeader cityList={props.cityList} />
    <BodyHeader />
  </div>
  );
}

export default MainHeader;