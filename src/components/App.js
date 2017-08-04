import React, { Component } from "react";
import "tachyons";
import "../App.css";
import product from "../product_03.jpg";
import Header from "./Header";
import Form from "./Form";
import { ModalContainer, ModalDialog } from "react-modal-dialog";

let ga = window.ga;

class Hero extends Component {
  constructor() {
    super();

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
        {/* <h3 className="f-subheadline lh-title measure-narrow w-50 tc center kitsch-brown ma0 mb4">
          Esențe neobișnuite.
        </h3> */}
        <img
          className="mb3 mw4 mw-100-ns"
          src={process.env.PUBLIC_URL + "/product-logo.svg"}
          alt=""
        />
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
        <img className="vh-75 mh-3" src={product} alt="" />
        <p className="f6 mb4 kitsch-brown o-6">20 RON / Sticlă</p>
        <a
          onClick={this.handleClick}
          className="f5 avenir link dim ph4 pv3 mb2 mt4 dib white bg-darken-kitsch-brown"
        >
          Comandă Acum
        </a>
        <p className="f7 f6-ns tc mb4 kitsch-brown o-60 avenir measure-wide">
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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    let currentLinkText = e.nativeEvent.target.text.toLowerCase();
    ga.send(
      "send",
      "event",
      `${currentLinkText}-button`,
      "click",
      "learn more"
    );
  }

  render() {
    return (
      <div className="App min-vh-100 flex flex-column mw9 ph3 ph4-m ph6-l center">
        <Header onClick={this.onClick} />
        <Hero />
      </div>
    );
  }
}