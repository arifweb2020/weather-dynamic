import './App.scss';
import Header from './components/header/Header';
import Inputbox from './components/inputbox/Inputbox';

function App() {
  return (
    <div className="container app">
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='text-center mt-2'>Weather App</h1>
          <div className='inner__conatiner mt-5'>
            <Header />
            <Inputbox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
