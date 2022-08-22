import React  from 'react';
import {Field, Form, Formik} from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../store/actions/menuActions';

const validationSchema = yup.object().shape({
  dishes: yup.string().required().min(3).label('Person Name'),
  compound: yup.string().required(),  
});

 function DishesForm() {   

    const INITIAL_VALUE = {dishes: '', compound: '', price: '', catId: ''};  
   const dispatch = useDispatch();

   return (
           <div>
            <h2>Добавление нового блюда</h2>
            <Formik initialValues={INITIAL_VALUE}  
             onSubmit={onFormSubmit }  validationSchema={validationSchema}>
              {(props) => {
          return (
                           
                <Form>
                <label htmlFor="NameDish">Name DISH</label>
                <Field name="dishes" /><br/>
                <div>{props.touched.name && props.errors.name}</div>

                <label htmlFor="Compound">COMPOUND</label>
                <Field name="compound" /><br/>
                <div>{props.touched.name && props.errors.name}</div>                

                <label htmlFor="price">PRICE&nbsp;(грн)</label>
                <Field name="price" /><br/> 

                <label htmlFor="catId">N categor</label>
                <Field name="catId" /><br/>
                
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
                          
            const newForm =  {...values, id: Date.now()};
            console.log('submit', newForm);
             dispatch(addUser(newForm)); 
            values = '';
            
           };
        }   
        
 export default DishesForm;

