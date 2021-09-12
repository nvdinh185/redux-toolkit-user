import InputField from 'components/custom-fields';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';

UserForm.propTypes = {
  onSubmit: PropTypes.func,
};

UserForm.defaultProps = {
  onSubmit: null,
}

function UserForm(props) {
  const { initialValues } = props;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required.'),
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
              component={InputField}

              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FormGroup>
              <Button type="submit" color='primary'>OK</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default UserForm;