import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
    state = {
        name1: '',
        name2: '',
        result: '',               
    }

    render() {
        return (
            <div>
                <br />
                <input
                    name="name"
                    value={this.state.name1}
                    placeholder='your operand1'
                    onChange={this.onName1InputChange}
                />
                <select id="select" name='operator'>
                    <option >+</option>
                    <option >-</option>
                    <option >/</option>
                    <option >*</option>
                </select>
                <input
                    name="name"
                    value={this.state.name2}
                    placeholder='your operand2'
                    onChange={this.onName2InputChange}
                />
                = 
                <span>{this.state.result}</span>
                <br />
                <button onClick = {this.onButtonClick}> add</button>

            </div>
        );
    }    

    onButtonClick = () => {
      if ( !this.state.name1.length || !this.state.name2.length ) {
        this.setState({
          result: '',
      });
      return ;        
      }        
        this.setState({
            result: (+this.state.name1)+(+this.state.name2),
        });      
    }

    onName1InputChange = (e) => {
        this.setState({
            name1: e.target.value,
        });
    }
    onName2InputChange = (e) => {
      this.setState({
          name2: e.target.value,
      });
  }}
