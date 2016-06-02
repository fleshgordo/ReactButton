import React from 'react';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Home extends React.Component {
	constructor() {
		super();
		this.state = {on:false, clickCount: 0};
		this.buttonLabels = ['Click me!','Good one','Click once more','Thanks!','That was awesome!','Right?', 'one last time, plz','...','Uppsss']
   	}

	handleClick() {
		var newCount = (this.state.clickCount + 1) % 8;
		this.setState({on: !this.state.on});
		this.setState({clickCount: newCount});
		document.body.style.backgroundColor = this.generateRandomColour();
	}

	generateRandomColour() {
		return "#" + Math.random().toString(16).slice(2, 8);
	}

  	render() {
	  	var key = this.state.clickCount,
			buttonLabel = this.buttonLabels[key],
			motionClassName = "button button-" + key;
	    return (
	    	<div>
	    		<ReactCSSTransitionGroup transitionName="switch" className={key}
	    	 		transitionAppear = {true} 
	    	 		transitionAppearTimeout = {1500}
	               	transitionEnter = {true} 
	               	transitionLeave = {true}>
	      		<button key={key} className={motionClassName} onClick={this.handleClick.bind(this)}>{buttonLabel}</button>
	     		</ReactCSSTransitionGroup>
	     	</div>
	    );
  	}
}

module.exports = Home;
