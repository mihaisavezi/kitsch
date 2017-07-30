import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import product from './product_03.jpg';
import Header from './components/Header'
import Form from './components/Form'
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

let ga = window.ga;

class Hero extends Component {
	constructor() {
		super();

		this.state = {
			isShowingModal: false,
		}
	}

	handleClick = () => {
		ga('send', 'event', 'buy button', 'click', 'esenta de hamsii');		
		this.setState({ isShowingModal: true })
	}
	handleClose = () => this.setState({ isShowingModal: false })

	
	

	render() {

		const modalStyle = {
			padding: '40px 40px',
			minWidth: 400,
			borderRadius: '0'
		}


		return (<div className="w-100 flex flex-column items-center justify-center">
			<img className="mb3" src={process.env.PUBLIC_URL + '/product-logo.svg'} alt="" />
			<h3 className="f3 fw6 ma0 mb4 kitsch-brown avenir">Avem, avem hamsi aveeem!</h3>
			<p className="f5 ma0 mb5 kitsch-brown lh-copy tc avenir measure">
				Stiu ca iti amintesti cu drag de mirosul puternic de hamsii si usturoi in diminetiile calduroase cand mergeai la plaja. Acum nu mai trebuie sa te duci pe faleza pentru o hamsie, vine hamsia la tine.
    </p>
			<img className="vh-75 mh-3" src={product} alt="" />
			<a onClick={this.handleClick} className="f5 avenir link dim ph4 pv3 mb1 mt4 dib white bg-darken-kitsch-brown">Comandă Acum</a>
			{/* <p className="f6 mb4 kitsch-brown">20 RON / Sticlă</p> */}
			{
				this.state.isShowingModal &&
				<ModalContainer onClose={this.handleClose}>
					<ModalDialog style={modalStyle} onClose={this.handleClose}>
						<Form/>
					</ModalDialog>
				</ModalContainer>
			}
		</div>
		)
	}
}

class App extends Component {
	constructor(props) {
		super(props);

	}

  render() {
    return (
      <div className="App mw9 ph6 mt2 mb4 center">
        <Header/> 
        <Hero/>
      </div>
    );
  }
}

export default App;
