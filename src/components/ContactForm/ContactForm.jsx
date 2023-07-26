import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import css from './ContactForm.module.css';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <p className={css.errorMessage}>{message}</p>}
    />
  );
};

export const ContactForm = ({ onSubmit }) => {
  const { form, label, input, button } = css;

  const userSchema = object({
    name: string().required(),
    number: string().required(),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={form}>
        <label className={label}>
          Name
          <Field className={input} type="text" name="name" />
          <FormError name="name" />
        </label>
        <label className={label}>
          Number
          <Field className={input} type="tel" name="number" />
          <FormError name="number" />
        </label>
        <button type="submit" className={button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
