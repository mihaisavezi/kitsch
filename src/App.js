import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import product from './product_03.jpg';
import Header from './components/Header'

let ga = window.ga;

const Hero = ({onClick}) => (
  <div className="w-100 flex flex-column items-center justify-center">
    <img className="mb3" src={process.env.PUBLIC_URL + '/product-logo.svg'} alt=""/>
    <h3 className="f2 fw6 ma0 mb4 kitsch-brown avenir">Avem, avem hamsi aveeem!</h3>
    <p className="f4 ma0 mb5 kitsch-brown lh-copy tc avenir measure">
      Stiu ca iti amintesti cu drag de mirosul puternic de hamsii si usturoi in diminetiile calduroase cand mergeai la plaja. Acum nu mai trebuie sa te duci pe faleza pentru o hamsie, vine hamsia la tine.
    </p>
    <img className="vh-75 mh-3" src={product} alt=""/>
    <a onClick={onClick} className="f4 avenir link dim ph4 pv3 mb2 mt4 dib white bg-darken-kitsch-brown" href="#0">Cumpara acum</a>
  </div>
)

class App extends Component {

	onClick() {
		ga('send', 'event', 'buy button', 'click', 'esenta de hamsii');
	}

  render() {
    return (
      <div className="App mw9 ph6 mt2 mb4 center">
        <Header/> 
        <Hero onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
