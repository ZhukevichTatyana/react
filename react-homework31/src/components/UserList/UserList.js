import './UserList.css';

import React, { Component } from 'react';

import UserListItem from '../UserListItem/UserListItem';

export default class UserList extends Component {
    render() {
        return (
            <div className="task-list u-full-width">
                {this.props.list.map((item) => (
                    <UserListItem
                        key={item.id}
                        item={item}
                        onEdit={this.props.onEdit}
                        onRemove={this.props.onRemove}
                    />
                ))}
            </div>
        );
    }
}
