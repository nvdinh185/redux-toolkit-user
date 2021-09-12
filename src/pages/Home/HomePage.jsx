import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserList from 'components/UserList';
import { removeUser } from 'app/userSlice';
import { Link } from 'react-router-dom';

const randomNumber = () => {
  return 1000 + Math.trunc((Math.random() * 9000));
}

function HomePage() {

  const userList = useSelector(state => state.users);

  const dispatch = useDispatch();

  console.log('Hobby list: ', userList);

  const handleUserClick = (userId) => {
    const action = removeUser(userId);
    dispatch(action);
  }

  return (
    <div>
      <h1>REDUX HOOKS - Home Page</h1>

      <h2>This is list users</h2>
      <Link to="/add">Add user</Link>
      <UserList
        userList={userList}
        onUserClick={handleUserClick}
      />
    </div>
  );
}

export default HomePage;