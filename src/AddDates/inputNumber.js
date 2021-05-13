import React from 'react';

import {Field, ErrorMessage} from 'formik';

import TextError from './TextError';

const InputNumber = ({label, name}) => {

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field type='number' id={name} name={name} step='1' min='1' max='31' />
            <ErrorMessage name={name} component={TextError} />
         </div>
    )
}

export default InputNumber;