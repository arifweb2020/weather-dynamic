import './App.scss';
import getFormattedWeatherData from './common/data/api/url';
import Forecast from './components/forecast/Forecast';
import Header from './components/header/Header';
import Inputbox from './components/inputbox/Inputbox';
import Location from './components/location/Location';
import Tempdetails from './components/temp-details/Tempdetails';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from 'react';

function App() {

  const [query, setQuery] = useState({ q: "bengaluru" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  console.log("units")
  // const getWeather = async () => {
  //   const data = await getWeatherData('weather', { q: 'mumbai' })
  //   console.log(data)
  // }
  // getWeather()

  useEffect(() => {
    const fetchWeather = async () => {
      // const message = query.q ? query.q : "current location.";

      // toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);


  const formatBackground = () => {
    if (!weather) return "#000";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "#000";
    return "#3f51b";
  };


  return (
    <div className='main__container' style={{ 'backgroundColor': formatBackground() }}>
      <div className="container app">
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center mt-4'>Check Weather</h1>
            <div className='inner__container mt-5'>
              <Header setQuery={setQuery} />
              <Inputbox setQuery={setQuery} units={units} setUnits={setUnits} />
              {weather && (
                <><Location weather={weather} />
                  <Tempdetails weather={weather} />
                  <Forecast heading="Hourly Forecast" items={weather.hourly} />
                  <Forecast heading="Daily Forecast" items={weather.daily} /></>
              )}
            </div>
          </div>
        </div>
      </div>
      <h3 className='text-center mt-3'>Made by Arif</h3>
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
