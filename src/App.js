import './App.scss';
import Forecast from './components/forecast/Forecast';
import Header from './components/header/Header';
import Inputbox from './components/inputbox/Inputbox';
import Location from './components/location/Location';
import Tempdetails from './components/temp-details/Tempdetails';

function App() {
  return (
    <div className='main__container'>
      <div className="container app">
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center mt-2'>Check Weather</h1>
            <div className='inner__container mt-5'>
              <Header />
              <Inputbox />
              <Location />
              <Tempdetails />
              <Forecast heading="Hourly Forecast" />
              <Forecast heading="Daily Forecast" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
