import React from 'react';
import { Formik, Field, Form } from 'formik';
import { ListCards } from 'components/ListCards/ListCards';

const initialValues = {
  eng: '',
  translate: '',
};

export const AddCards = ({ addCard, cards, deleteCard }) => {
  const onSubmit = ({ eng, translate }, { resetForm }) => {
    eng = eng.trim();
    translate = translate.trim();
    if (eng || translate !== '') {
      addCard(eng, translate);
      resetForm();
    }
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ margin: '0 auto' }}>Add New Card</p>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <label>
              <Field
                name="eng"
                type="text"
                placeholder="English word"
                required
              />
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
        <ListCards cards={cards} deleteCard={deleteCard} />
      </div>
    </>
  );
};
