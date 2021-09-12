import { addNewUser } from 'app/userSlice';
import PhotoForm from 'pages/form';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

AddEditPage.propTypes = {};

const randomNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min));
}

function AddEditPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    name: '',
  };

  const handleSubmit = (values) => {
    return new Promise(resolve => {
      console.log('Form submit: ', values);

      setTimeout(() => {

        const newUser = {
          ...values,
          id: randomNumber(1, 99),
        }
        const action = addNewUser(newUser);
        console.log({ action });
        dispatch(action);

        history.push('/users');
        resolve(true);
      }, 1000);
    });
  }

  return (
    <PhotoForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  );
}

export default AddEditPage;