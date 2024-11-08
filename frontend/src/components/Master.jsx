import React from 'react';
import Navbar from './Navbar'; 
import Home from './Home';       
import About from './About';
import Services from './Services';
import Services2 from './Service2';
import Service3 from './Service3';
import Vouchers from './Vouchers';
import Question from './Question';
import Contact from './Contact';


const Master = () => {
  return (
    <>

      <Navbar /> 

      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="services2">
        <Services2 />
      </div>
      <div id="services3">
        <Service3 />
      </div>
      <div id="vouchers">
        <Vouchers />
      </div>
      <div id="question">
        <Question />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
    </>
  );
};

export default Master;
