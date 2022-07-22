import React, {  useState} from 'react'

function UserForm({onSave}) {
   
 const INITIAL_VALUE = {name: '', surname: '', email: ''};
  
  const [formState, setFormState] = useState(INITIAL_VALUE);

        return (
            <form className="row"            
                 onSubmit={onFormSubmit} >                   
                         <div className="three columns">
                             <input
                                 type="text"
                                required
                                 name="name"
                                 
                                 value={formState.name}
                                 onChange={onInputChange}
                             />
                        </div>
                        <div className="three columns">
                             <input
                                 type="text"
                                required
                                 name="surname"
                                 
                                 onChange={onInputChange}
                                 value={formState.surname}
                             />
                        </div>
                        <div className="three columns">
                             <input
                                type="text"
                                required
                                 name="email"
                                 
                                 value={formState.email}
                                 onChange={onInputChange}
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

   function  onInputChange(e) {
     setFormState({
         ...formState,
         [e.target.name]: e.target.value,
     });
    };

    function onFormSubmit(e) {
        e.preventDefault();    

        onSave(formState );
         setFormState(INITIAL_VALUE);        
    }        
}
export default UserForm;