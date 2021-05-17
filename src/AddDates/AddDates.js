import React from 'react';

import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import Button from 'react-bootstrap/Button';

import FormikControl from './FormikControl';
import {VALIDATION} from '../Utils/Utils';

import './AddDate.css';

const initialValues = {
    contract: '',
    creditValue: '',
    scheduledDate: '',
    dataCredit: new Date(),
    dobandaCredit: '',
    comisionRiscuri: '',
    valut: 'EURO',
    numarLuni: ''
};

const validationSchema = Yup.object({
    contract: Yup.string().required(VALIDATION.field),
    creditValue: Yup.number()
						.typeError(VALIDATION.typeError)
						.positive(VALIDATION.positive)
						.required(VALIDATION.field),
    scheduledDate:Yup.number()
                        .typeError(VALIDATION.typeError)
                        .positive(VALIDATION.positive)
                        .required(VALIDATION.field)
                        .max(31, VALIDATION.maxDay)
                        .min(1, VALIDATION.minDay),
    dataCredit: Yup.date().required(VALIDATION.field),
    dobandaCredit: Yup.number()
                        .typeError(VALIDATION.typeError)
                        .positive(VALIDATION.positive)
                        .required(VALIDATION.field),
    comisionRiscuri: Yup.number()
                    .typeError(VALIDATION.typeError)
                    .positive(VALIDATION.positive)
                    .required(VALIDATION.field),
    numarLuni: Yup.number()
                    .typeError(VALIDATION.typeError)
                    .positive(VALIDATION.positive)
                    .required(VALIDATION.field)               
});

const AddDates = ({setDates}) => {
	const onSubmit = async (values, onSubmitProps) => {
        console.log(values);
        setDates(values);
		onSubmitProps.resetForm();
	}; 

	return (
		<>
			<h2>Adauga date</h2>
			<Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form id='form-tabel'>
                    <FormikControl control='input' label='Numar Contract' name='contract' />
                    <FormikControl control='input' label='Valoare Credit' name='creditValue' />
                    <FormikControl control='select' label='Valuta' name='valut' />
                    <FormikControl control='input' label='Numar de luni' name='numarLuni' />
                    <FormikControl control='number' label='Data scadenta' name='scheduledDate' />
                    <FormikControl control='date' label='Data de acordare a creditului' name='dataCredit' />
                    <FormikControl control='input' label='Dobanda Credit (%)' name='dobandaCredit' />
                    <FormikControl control='input' label='Comision de Riscuri' name='comisionRiscuri' />
                    <Button 
                        variant='primary' 
                        type='submit'
                        id='submitButton'
                        >
                            Adauga date
                    </Button>
                </Form>
            </Formik>
		</>
	);
  }
   
  export default AddDates;