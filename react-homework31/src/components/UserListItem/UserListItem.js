import './UserListItem.css';

import React, { Component } from 'react';

export default class UserListItem extends Component {
    render() {
        return (
        <div className="row" >
            <div className="three columns">{this.props.item.name}</div>
            <div className="three columns">{this.props.item.surname}</div>
            <div className="three columns">{this.props.item.email}</div>
            <div className="three columns">
                <button className="edit-btn"
                        onClick={this.onEditItemClick}>
                         Edit
                </button>
                 <button className="delete-btn"
                         onClick={this.onDeleteItemClick}>
                            Delete
                 </button>
             </div>
        </div>                          
        );
    }   

    onDeleteItemClick = (e) => {       

        this.props.onRemove(this.props.item.id);
    }
    onEditItemClick = (e) => {
        
        this.props.onEdit(this.props.item.id);
        console.log(this.props.item);
    }
}
