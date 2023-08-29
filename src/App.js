import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';
import { useEffect, useState } from 'react';
import Loading from './components/Spinner/Spinner';

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function waitAndSetLoading() {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false);
    }
    waitAndSetLoading();
  }, [loading]);

  return (
    <div className="align-page">
      <div className="align-menu">
        <Menu setLoading={setLoading}/>
      </div>
      <div className="align-slider">
        <Slider/>
      </div>
      { loading &&
        <div className='loading-container'>
          <Loading/>
        </div>
      }
    </div>
  );
}

export default App;
