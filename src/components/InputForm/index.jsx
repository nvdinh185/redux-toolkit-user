import React from 'react';
import { ErrorMessage } from 'formik';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

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