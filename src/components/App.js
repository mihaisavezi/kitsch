import React, { Component } from "react";
import "tachyons";
import "../App.css";
import product from "../product_03.png";
import Header from "./Header";
import Form from "./Form";
import { ModalContainer, ModalDialog } from "react-modal-dialog";

import Rx from "rxjs";
import recycle from "recycle";

let ga = window.ga;
const lerp = (start, end) => {
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  return {
    x: start.x + dx * 0.1,
    y: start.y + dy * 0.1
  };
};

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          width: "inherit"
        }}
      >
        <img
          className="mb3 db center mw4 mw-100-ns"
          src={process.env.PUBLIC_URL + "/product-logo.svg"}
          style={{
            transformStyle: `preserve-3d`,
            transformOrigin: "top left",
            transform: `rotateX(${this.props.rotation.x}deg) rotateY(${this
              .props.rotation.y}deg)`
          }}
          alt=""
        />
      </div>
    );
  }
}

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingModal: false
    };
  }

  handleClick = () => {
    ga("send", "event", "buy button", "click", "esenta de hamsii");
    this.setState({ isShowingModal: true });
  };
  handleClose = () => this.setState({ isShowingModal: false });

  render() {
    const modalStyle = {
      padding: "40px 40px",
      minWidth: 400,
      borderRadius: "0"
    };

    return (
      <div className="w-100 flex flex-column items-center justify-center">
        <Image rotation={this.props.rotation} />
        <h3 className="f4 tc f3-ns fw6 ma0 kitsch-brown avenir">
          Eau de Costinești - elimină mirosurile plăcute, definitiv.
        </h3>
        <p className="f7 f6-ns tc ttu tracked ma0 mt2 mb4 kitsch-brown o-60 avenir measure-wide">
          odorizant de cameră
        </p>
        <p className="f5 ma0 mb5 kitsch-brown lh-copy tc-ns avenir measure">
          Se spune că omul sfințește locul. Însă noi credem că mirosul îl
          sfințește. Și avem și dovada vie. Esența de hamsie, extrasă cu grija
          din sfintele grătare din Costinesti e tot ce ai nevoie ca sa aduci
          amintirile unei veri toride, la tine în casă. Pentru un efect de
          durată asigură-te că dai în toată casa, atât în bucătarie dar mai ales
          în dormitor.
        </p>
        <img src={product} className="vh-75 db center mh-3 pa2" />
        <p className="f6 mb4 kitsch-brown o-6">20 RON / Sticlă</p>
        <a
          onClick={this.handleClick}
          className="f5 avenir link dim ph4 pv3 pb2 mt4 dib white bg-darken-kitsch-brown"
        >
          Comandă Acum
        </a>
        <p className="f7 f6-ns tc pb4 mv0 kitsch-brown o-60 avenir measure-wide">
          Rezerva de microspray contine un parfum concentrat care se raspândește
          sub forma unor particule fine în atmosferă.
        </p>
        {this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose}>
            <ModalDialog style={modalStyle} onClose={this.handleClose}>
              <Form />
            </ModalDialog>
          </ModalContainer>}
      </div>
    );
  }
}

const App = recycle({
  initialState: {
    rotation: {
      x: 0,
      y: 0
    }
  },

  update(sources) {
    const mouseMove$ = sources
      .selectClass("jsApp")
      .addListener("onMouseMove")
      .map(e => ({ x: e.clientX, y: e.clientY }));

    const touchMove$ = sources
      .selectClass("jsApp")
      .addListener("onTouchMove")
      .map(e => ({ x: e.clientX, y: e.clientY }));

    const move$ = Rx.Observable.merge(mouseMove$, touchMove$);

    const animationFrame$ = Rx.Observable.interval(
      0,
      Rx.Scheduler.animationFrame
    );

    const smoothMove$ = animationFrame$
      .withLatestFrom(move$, (tick, move) => move)
      .scan(lerp);

    return [
      smoothMove$.reducer(function(state, returnedValue) {
        const rotX = returnedValue.y / window.innerHeight * 50 - 25;
        const rotY = returnedValue.x / window.innerWidth * 50 - 25;
        state.rotation = {
          x: rotX,
          y: rotY
        };
        return state;
      }),
      sources.selectClass("Header").addListener("sendOnClick").map(e => {
        let currentLinkText = e.nativeEvent.target.text.toLowerCase();
        ga.send(
          "send",
          "event",
          `${currentLinkText}-button`,
          "click",
          "learn more"
        );
      })
    ];
  },

  view(props, state) {
    return (
      <div className="jsApp relative">
        <svg 
              xmlns="http://www.w3.org/2000/svg" 
              version="1.1" className="triangles triangle-left svg-triangle" 
              fill-opacity="1"
              width="inherit"
              height="inherit"
              viewBox="0 0 100 100" 
              >
            
            <path height="100%" width="100%" d="M 0,0 100,100 0,100 Z"/>
            <path className="triangle-right" height="100%" width="100%" d="M 60,100 100,100 100,25 Z"/>
          </svg>
        <div className="App min-vh-100 flex flex-column mw9 ph3 ph4-m ph6-l center relative">
          <Header className="Header" sendOnClick={e => e} />
          <Hero {...state} />
        </div>
      </div>
    );
  }
});

export default App;
