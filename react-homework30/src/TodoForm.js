import React, { Component } from 'react';

export default class TodoForm extends Component {
    state = {
        name: '',
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    className=""
                    name="name"
                    value={this.state.name}
                    onChange={this.onInputChange}
                />
                <button>Save</button>
            </form>
        );
    }

    onInputChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            name: this.state.name,
        };

        this.props.onSave(newTodo);
        
        this.setState({
            name: '',
        });    
        
            
    }
    
    
}