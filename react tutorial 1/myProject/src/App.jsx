import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components1/section/Main";
import Mainsec1 from "./componets2/Mainsec1";
import Section4main from "./components4/Section4main";
import Footer from "./component5/Footer";


function App() {
  return (
    <div>
     <Nav />
     <Main />
     <Mainsec1 />
     <Section4main />
     <Footer />
    </div>
  );
}

export default App;
