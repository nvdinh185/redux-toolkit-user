import React from 'react';
import { FastField, Form, Formik } from 'formik';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';
import InputField from 'components/InputForm';

function UserForm(props) {
  const { initialValues, isAddMode, onSubmit } = props;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required.').min(5, 'Must have at least 5 characters.')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formikProps => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched, isSubmitting });

        return (
          <Form>
            <FastField
              name="name"
              label="User"

              placeholder="Nhập user ..."
              component={InputField}
            />

            <FormGroup>
              <Button type="submit">{isAddMode ? 'Add' : 'Edit'}</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default UserForm;