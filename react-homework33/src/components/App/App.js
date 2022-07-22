import React, {
    useEffect,
    useState,   
} from 'react';
import {
    createUser as apiCreateUser,
    removeUser as apiRemoveUser,
    updateUser as apiUpdateUser,
    getUserList,
} from '../../api';
import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';

function App() {

    const [list, setList] = useState([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
        
        getUserList()
            .then((data) => {                
                setList(data);
            })
            .catch(() => {
                setError('Something went wrong');
            });       
    }, []);
   
        return (
            <div className="container">
                {error ? error : null}
                <UserList
                    list={list}                   
                    onRemove={removeUser}
                    onEdit={editUser}
                />
                <UserForm                  
                onSave={createUser}                                       
                />
            </div>
        );        

    function updateUser(updatedUser) {
        const prevUser = list.find(
            (item) => item.id === updatedUser.id,
        );

        setList(
             list.map((item) =>
                item.id === updatedUser.id ? updatedUser : item,
            ),
        );

        return apiUpdateUser(updatedUser).catch(() => {
            setError('Something went wrong');
            setList(list.map((item) =>
                    item.id === prevUser.id ? prevUser : item,
                ),
            );
        });
    } ;      

    function removeUser(id) {
        const newList = list.filter((item) => item.id !== id);

        setList(newList);

        return apiRemoveUser(id);
    };

   function editUser(id) {
        const User = list.find((item) => item.id === id);
       console.log('edit',User);          
    };    

    function createUser(newUser) {
        if (newUser.id) {
            console.log(newUser.id);
            updateUser(newUser);
        } else {              
    
        newUser = {
            ...newUser,            
        };

         apiCreateUser(newUser).then((data) => {            
                setList([...list, data]);            
         });
        }
    }  
}
export default App;