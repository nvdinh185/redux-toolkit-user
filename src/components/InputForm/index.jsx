import { ErrorMessage } from 'formik';
// import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
  // name: PropTypes.string,
  // label: PropTypes.string,
  // placeholder: PropTypes.string,
  // component: PropTypes.bool,
};

InputField.defaultProps = {
  // name: 'text',
  // label: '',
  // placeholder: '',
  // component: false,
};

function InputField(props) {
  const { field, label, placeholder } = props;
  // console.log(props);

  return (
    <FormGroup>
      {label && <Label>{label}</Label>}

      <Input
        {...field}

        placeholder={placeholder}
      />

      <ErrorMessage name={"name"} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputField;