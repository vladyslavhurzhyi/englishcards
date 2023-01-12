import React from 'react';
import { Formik, Field, Form } from 'formik';

const initialValues = {
  eng: '',
  translate: '',
};

export const AddCards = ({ addCard }) => {
  const onSubmit = ({ eng, translate }, { resetForm }) => {
    eng = eng.trim();
    translate = translate.trim();
    if (eng || translate !== '') {
      addCard(eng, translate);
      console.log('карточка добавлена');
      resetForm();
    }
  };

  return (
    <>
      <div>Add New Card</div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <label>
            <Field name="eng" type="text" placeholder="English word" required />
          </label>
          <label>
            <Field
              name="translate"
              type="text"
              placeholder="Translate"
              required
            />
          </label>

          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
};
