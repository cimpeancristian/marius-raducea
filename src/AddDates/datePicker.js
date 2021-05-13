import React from 'react';

import {Field, ErrorMessage} from 'formik';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import TextError from './TextError';

const DatePicker = ({label, name}) => {

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} >
            {
                ({form, field})=> {
                    const {setFieldValue} = form;
                    const {value} = field;
                    return <ReactDatePicker 
                                id={name} 
                                {...field} 
                                dateFormat="yyyy/MM/dd"
                                selected={value} 
                                onChange={date => setFieldValue(name, date)}
                            />
                }
            }
            </Field>
            <ErrorMessage name={name} component={TextError} />
         </div>
    )
}

export default DatePicker;