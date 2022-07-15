import React, { Component } from 'react';
import { createUser, getUserList, removeUser, updateUser } from '../../api';

import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';

export default class App extends Component {
    state = {
        list: [],
        error: '',
    };

    componentDidMount() {
        this.fetchList();
    }

    render() {
        return (
            <div className="container">
                {this.state.error ? this.state.error : null}
                <UserList
                    list={this.state.list}
                    // onToggle={this.toggleTodo}
                    onRemove={this.removeUser}
                    onEdit={this.editUser}
                />
                <UserForm 
                onSave={this.createUser}                 
                />
            </div>
        );
    }

    fetchList() {
        return getUserList()
            .then((data) => this.setState({ list: data }))
            .catch(() => {
                this.setState({
                    error: 'Something went wrong',
                });
            });
    }

    updateUser(updatedUser) {
        const prevUser = this.state.list.find(
            (item) => item.id === updatedUser.id,
        );

        this.setState({
            list: this.state.list.map((item) =>
                item.id === updatedUser.id ? updatedUser : item,
            ),
        });

        return updateUser(updatedUser).catch(() => {
            this.setState({
                error: 'Something went wrong',
                list: this.state.list.map((item) =>
                    item.id === prevUser.id ? prevUser : item,
                ),
            });
        });
    }    

    removeUser = (id) => {
        const newList = this.state.list.filter((item) => item.id !== id);

        this.setState({
            list: newList,
        });

        return removeUser(id);
    };
    editUser = (id) => {
        const User = this.state.list.find((item) => item.id === id);
       console.log('edit',User); 
     
    }

    createUser = (newUser) => {
        if (newUser.id) {
            this.updateUser(newUser);
        } else {              
    
        newUser = {
            ...newUser,
            
        };

        createUser(newUser).then((data) => {
            this.setState({
                list: [...this.state.list, data],
             });
         });
    }
    }
}
