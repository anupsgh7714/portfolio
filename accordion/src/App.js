// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import Accordion from './component/accordion/Accordion';
// import Card from './Bootstrap/Card1';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Weather from './Weather App/Weather';
// import Menu from './Navbar/Menu';
// import Statewise from './component/statewiseData/Statewise';
// import Login from './login/Login';
// import Portfolio from './Portfolio/Portfolio';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Portfolio /> */}
        <Weather />
      </BrowserRouter>
    </>
    // <>
    //   <Login />
    //   {/* <Statewise /> */}
    // </>

    
    // {/* //   <Card /> 
    // //   <Menu /> */}
    // <Accordion />


  );
}
  

export default App;
