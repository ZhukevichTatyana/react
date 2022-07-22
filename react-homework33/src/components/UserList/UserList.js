import './UserList.css';

import React from 'react';

import UserListItem from '../UserListItem/UserListItem';

function UserList({list, onRemove, onEdit})  {
   
        return (
            <div className="task-list u-full-width">
                {list.map((item) => (
                    <UserListItem
                        key={item.id}
                        item={item}
                        onEdit={onEdit}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        );
    
}
export default UserList;