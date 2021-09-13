import { removeUser } from 'app/userSlice';
import UserList from 'components/UserList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function HomePage() {

  const userList = useSelector(state => state.users);

  const dispatch = useDispatch();
  const history = useHistory();

  // console.log('Hobby list: ', userList);

  const handleRemoveUserClick = (userId) => {
    const action = removeUser(userId);
    dispatch(action);
  }

  const handleEditUserClick = (userId) => {
    history.push(`/edit/${userId}`);
  }

  return (
    <div>
      <h1>REDUX HOOKS - Home Page</h1>

      <h2>This is list users</h2>
      <Link to="/add">Add user</Link>
      <UserList
        userList={userList}
        onRemoveUserClick={handleRemoveUserClick}
        onEditUserClick={handleEditUserClick}
      />
    </div>
  );
}

export default HomePage;