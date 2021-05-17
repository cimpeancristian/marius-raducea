import React from 'react';

import {Field, ErrorMessage} from 'formik';

import TextError from './TextError';

const Select = ({label, name}) => {

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
			<Field as='select' id={name} name={name} >
				<option value="EURO">EURO</option>
				<option value="USD">USD</option>
				<option value="RON">RON</option>
				<option value="CHF">CHF</option>
			</Field>
            <ErrorMessage name={name} component={TextError} />
         </div>
    )
}

export default Select;