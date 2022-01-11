import InputField from 'components/InputForm';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';

UserForm.propTypes = {
  isAddMode: PropTypes.bool,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object
};

UserForm.defaultProps = {
  isAddMode: true,
  onSubmit: null,
  initialValues: {}
}

function UserForm(props) {
  const { initialValues, isAddMode } = props;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required.').min(5, 'Must have at least 5 characters.')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        // do something here ...
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