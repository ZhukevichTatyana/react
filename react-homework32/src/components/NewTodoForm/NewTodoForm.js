import React from 'react';
import {useState} from 'react'; 
export default function NewTodoForm({onSave})  {
   
     const [title, setTitle] = useState('');   
   
        return (
            <form
              onSubmit={onFormSubmit}
             >
                <div className="row">
                    <div className="ten columns">
                        <input
                            type="text"
                            required
                            className="u-full-width"
                            value={title}
                            onChange={onTitleChange}
                        />
                        <span
                            id="errorContainer"
                            className="error hidden"
                        ></span>
                    </div>
                    <div className="two columns">
                        <button
                            type="submit"
                            
                            className="u-full-width"
                            
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        );    

    function onTitleChange(e) {
       
        setTitle(e.target.value);       
    };

     function onFormSubmit(e) {
        e.preventDefault();              
      
          onSave({
            title: title,
            
        });
        
         setTitle('');
    };
}