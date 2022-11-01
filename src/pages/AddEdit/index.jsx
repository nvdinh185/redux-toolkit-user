import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addNewUser, updateUser } from 'app/userSlice';
import UserForm from 'components/UserForm';

/*
Tạo một số ngẫu nhiên trong khoảng từ 2 đến 99
*/
const randomNumber = () => {
  return 2 + Math.floor((Math.random() * 99));
}

function AddEditPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();
  const isAddMode = !userId;

  const userEdited = useSelector(state => state.users.find(x => x.id === +userId));

  const initialValues = isAddMode ? {
    name: '',
  } : userEdited;

  const handleSubmit = (values) => {
    console.log('Form submit: ', values);

    setTimeout(() => {
      if (isAddMode) {
        const newUser = {
          id: randomNumber(),
          ...values,
        }
        const action = addNewUser(newUser);
        dispatch(action);
      } else {
        // Do something here
        const action = updateUser(values);
        dispatch(action);
      }
      history.push('/users');
    }, 1000);
  }

  return (
    <UserForm
      isAddMode={isAddMode}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  );
}

export default AddEditPage;