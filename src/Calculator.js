import React, { Component } from 'react';

class Calculator extends Component {
	constructor(props){
    	super(props)
    	this.state = {
      		total: 0,
      		valOne: 0,
      		valTwo: 0
   		}
   		this.addNum1 = this.addNum1.bind(this);
   		this.addNum2 = this.addNum2.bind(this);
 	}

 	addNum1(event){
 		this.setState({ valOne: event.target.value });
 	}

 	addNum2(event){
 		this.setState({ valTwo: event.target.value});
 	}

 	addTotal(event){
 		this.setState({total: Number(this.state.valOne) + Number(this.state.valTwo)});
 	}

	render() {
		return (
			<div className="container">
  				<h1>Add with React!</h1>
    			<input type="integer" onChange={(event) => this.addNum1(event)} />
    				<span>+</span>
    			<input type="integer" onChange={(event) => this.addNum2(event)} />
    				<span>=</span>
    			<button onClick={(event) => this.addTotal(event)}>Add</button>
    			<h3 onChange={(event) => this.resetTotal(event)} >{this.state.total}</h3>
			</div>
		);
	}
}

export default Calculator;
