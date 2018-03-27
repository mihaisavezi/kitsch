import React, { Component } from "react";
import "tachyons";
import "../App.css";
import product from "../product_02.png";
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
          className="mb3 db mw4 mw-100-ns tl"
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
      <div className="w-100 flex flex-column flex-row-ns mw7 center">
        <div className="w-100 w-50-ns pa3">
        <h3 className="dn-ns f2 tc tl-ns f-headline-ns fw6 ma0 white avenir w6">
          Dacie din garaj
        </h3>
          <p className="f7 f6-ns tc tl-ns serif tracked ma0 mt3 mb1 white o-60 measure-wide">
              Multașteptatul, care tot întârzie să apară
            </p>
          <h3 className="f3 dn db-ns tc tl-ns f-headline-ns fw6 ma0 white o-90 avenir w6">
            Tramvai
          </h3>
          <h3 className="f3 dn db-ns tc tl-ns f-headline-ns fw6 ma0 white o-90 avenir w6">
            N<sup>o</sup> 41
          </h3>
          <p className="f7 f6-ns tc tl-ns ttu tracked ma0 mt3 mb4 white o-60 avenir measure-wide">
            odorizant de cameră
          </p>
        </div>
        <div className="w-100 w-50-ns pa3 tc">
          <img src={product} className="vh-75 db center mh-3 pa2" />
          <p className="f6 mb4 white o-60">20 RON / Sticlă</p>
          <a
            onClick={this.handleClick}
            className="f5 avenir link dim ph4 pv3 pb2 mt4 dib near-black bg-gold"
          >
            Comandă Acum
          </a>
          <p className="f7 f6-ns tc mt3 pb4 mb0 white o-60 avenir measure-wide">
            Rezerva de microspray contine un parfum concentrat care se raspândește
            sub forma unor particule fine în atmosferă.
          </p>
        </div>
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
        const rotLeftShape = returnedValue.y / window.innerHeight * (100-75) + 75;
        const rotRightShape = returnedValue.x / window.innerWidth * (50-20) + 20;
        state.rotation = {
          l: rotLeftShape,
          r: rotRightShape
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
      <div className="jsApp relative bg-img">
        <div className="parent z-2">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1" className="triangles triangle-left svg-triangle"
                fillOpacity="1"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                >

              <path className="triangle-right" height="100%" width="100%" d={`M ${state.rotation.r},100 100,100 100,50 Z`}/>
              <path height="100%" width="100%" d={`M 0,20 ${state.rotation.l},100 0,100 Z`}/>
            </svg>
        </div>
        <div className="App min-vh-100 flex flex-column center relative">
          <Header className="Header" sendOnClick={e => e} />
          <Hero {...state} />
        </div>
      </div>
    );
  }
});

export default App;
