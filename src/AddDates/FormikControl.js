import React from 'react';

import InputText from './inputText';
import InputNumber from './inputNumber';
import DatePicker from './datePicker';
import Select from './Select';

const FormikControl = ({control, label, name}) => {
    switch(control){
        case 'input': return <InputText label={label} name={name} />
        case 'date': return <DatePicker label={label} name={name} />
        case 'number': return <InputNumber label={label} name={name} />
        case 'select': return <Select label={label} name={name} />
        default: return null;     
    }
}

export default FormikControl;
