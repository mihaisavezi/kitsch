import React, { Component } from "react";
import Header from './Header';

const WorkInProgress = () =>
  <div className="App min-vh-100 flex flex-column mw9 ph6 center">
    <Header />
    <div className="w-100 flex flex-column flex-auto items-center justify-center">
      <h1 className="f-headline ttu avenir fw1 tc lh-solid ma0 kitsch-brown o-20 pa2 mb7">
        Mai e de lucru.
      </h1>
    </div>
  </div>;

  export default WorkInProgress;