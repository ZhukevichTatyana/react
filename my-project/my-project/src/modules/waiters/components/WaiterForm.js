import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../store/actions/waitersActions';

const validationSchema = yup.object().shape({
  name: yup.string().required().min(3).label('Person Name'),
  surname: yup.string().required(),  
});

 function WaiterForm({user}) {   
  
 console.log('userf',user)
 
     const INITIAL_VALUE = {name: '', surname: '', table: '',salary: ''}; 
    
     
  const dispatch = useDispatch();

   return (
           <div>
            <h2>Добавление нового официанта</h2>
           
           <Formik initialValues={user}  
             onSubmit={onFormSubmit }  validationSchema={validationSchema}>
              {(props) => {
          return (                           
                <Form>
                <label abel htmlFor="firstName">First Name</label>
                <Field name="name" /><br/>
                <div>{props.touched.name && props.errors.name}</div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="surname" /><br/>
                <div>{props.touched.surname && props.errors.surname}</div>
                <label htmlFor="table">Number table</label>
                <Field name="table" /><br/>                
                <label htmlFor="salary">Salary</label>
                <Field name="salary" /><br/>
                <span id="errorContainer" className="error hidden"></span>
                <button type="submit" disabled={!props.isValid} >       
                        
                            SAVE
                </button>
                </Form>               
                );
            }}            
            </Formik>
            </div> 
        ); 

     function onFormSubmit(values) {
                          
            const newForm =  {...values};
           
            console.log('submit', newForm);
             dispatch(addUser(newForm)); 
             values = INITIAL_VALUE;
            
           };
           
        }   
        
 export default WaiterForm;
