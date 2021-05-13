import React from 'react';

import {Field, ErrorMessage} from 'formik';

import TextError from './TextError';

const InputText = ({label, name}) => {

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field type='text' id={name} name={name} />
            <ErrorMessage name={name} component={TextError} />
         </div>
    )
}

export default InputText;