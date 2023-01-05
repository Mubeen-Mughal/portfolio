import React from "react";
import TopBar from "./component/header/TopBar";
import Testimonial from "./component/testimonial/Testimonial";
import Contact from "./component/Contact/Contact";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Work from "./component/work/Work";
import './App.scss';
function App() { 
  return (
    <div className="App">
      <TopBar></TopBar>
      <div className="sections">
      <Intro/>
      <Portfolio/>
      <Work/>
      <Testimonial/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
