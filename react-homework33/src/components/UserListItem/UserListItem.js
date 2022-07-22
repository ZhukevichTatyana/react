import './UserListItem.css';

import React from 'react';

function UserListItem({item, onRemove, onEdit}) {
    
        return (
        <div className="row" >
            <div className="three columns">{item.name}</div>
            <div className="three columns">{item.surname}</div>
            <div className="three columns">{item.email}</div>
            <div className="three columns">
                <button className="edit-btn"
                        onClick={onEditItemClick}>
                         Edit
                </button>
                 <button className="delete-btn"
                         onClick={onDeleteItemClick}>
                            Delete
                 </button>
             </div>
        </div>                          
        );       

    function onDeleteItemClick(e) {       

        onRemove(item.id);
    };

    function onEditItemClick(e) {        
        onEdit(item.id);
        console.log(item);
    };
}
export default UserListItem;