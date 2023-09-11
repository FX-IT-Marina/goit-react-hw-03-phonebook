import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import React from 'react';
import { Error, StyledForm, Button, Label, Input } from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name} render={message => <Error>{message}</Error>} />
  );
};

export const ContactForm = ({ onSubmit }) => {
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
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <FormError name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <FormError name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
