import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="align-page">
      <div className="align-menu">
        <Menu/>
      </div>
      <div className="align-slider">
        <Slider/>
      </div>
    </div>
  );
}

export default App;
