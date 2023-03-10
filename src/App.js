import React from "react";
// import {Article, brand, cta, feature, navbar} from './components'
import { Brand, CTA, Navbar } from "./components";

import "./App.css";

import {
  Footer,
  Header,
  Possibility,
  WhatGPT3,
  Blog,
  Features,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
