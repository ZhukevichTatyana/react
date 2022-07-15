import React, { Component } from 'react';

export default class UserForm extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
    };   

    render() {
        return (
            <form className="row"            
                 onSubmit={this.onFormSubmit} >                   
                         <div className="three columns">
                             <input
                                 type="text"
                                required
                                 name="name"
                                 value={this.state.name}
                                 onChange={this.onInputChange}
                             />
                        </div>
                        <div className="three columns">
                             <input
                                 type="text"
                                required
                                 name="surname"
                                 value={this.state.surname}
                                 onChange={this.onInputChange}
                             />
                        </div>
                        <div className="three columns">
                             <input
                                type="text"
                                required
                                 name="email"
                                 value={this.state.email}
                                 onChange={this.onInputChange}
                            />
                        </div>
                        <span
                            id="errorContainer"
                            className="error hidden"
                        ></span>
                   
                    <div className="three columns">
                        <button
                            type="submit"                            
                        >
                            SAVE
                        </button>
                    </div>
                
            </form>       
        );
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();    

        this.props.onSave({
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
        });

        this.setState({
            name: '',
            surname: '',
            email: '',
        });
    }
    
}
