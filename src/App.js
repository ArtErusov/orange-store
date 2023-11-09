import './scss/app.scss';
import MainHeader from './mainPage/header/MainHeader';
import Slider from './mainPage/slider/Slider';
import Cards from './mainPage/component/Cards'

function App() {
  return (<div>
      <MainHeader />
      <Slider />
      <Cards />
   </div>
  );
}

export default App;
