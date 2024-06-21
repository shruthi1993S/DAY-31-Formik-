import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css';

const BookForm = ({ initialValues, onSubmit }) => {
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <Field name="author" type="text" />
            <ErrorMessage name="author" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <Field name="isbn" type="text" />
            <ErrorMessage name="isbn" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="publicationDate">Publication Date</label>
            <Field name="publicationDate" type="date" />
            <ErrorMessage name="publicationDate" component="div" className="error-message" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;