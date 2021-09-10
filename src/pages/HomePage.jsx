import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserList from 'components/UserList';
import { addNewUser, removeUser } from 'app/userSlice';

const randomNumber = () => {
  return 1000 + Math.trunc((Math.random() * 9000));
}

function HomePage() {

  const userList = useSelector(state => state.users);

  const dispatch = useDispatch();

  console.log('Hobby list: ', userList);

  const handleAddUserClick = () => {
    const newId = randomNumber();

    const newUser = {
      id: newId,
      name: `User ${newId}`
    }

    const action = addNewUser(newUser);
    dispatch(action);
  }

  const handleUserClick = (userId) => {
    const action = removeUser(userId);
    dispatch(action);
  }

  return (
    <div>
      <h1>REDUX HOOKS - Home Page</h1>

      <h2>This is list users</h2>
      <button onClick={handleAddUserClick}>Add user</button>
      <UserList
        userList={userList}
        onUserClick={handleUserClick}
      />
    </div>
  );
}

export default HomePage;