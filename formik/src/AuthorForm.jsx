import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css';

const AuthorForm = ({ initialValues, onSubmit }) => {
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="birthDate">Birth Date</label>
            <Field name="birthDate" type="date" />
            <ErrorMessage name="birthDate" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="biography">Biography</label>
            <Field name="biography" as="textarea" />
            <ErrorMessage name="biography" component="div" className="error-message" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthorForm;