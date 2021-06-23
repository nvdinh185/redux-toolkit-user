import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../components/HobbyList';
import UserList from '../components/UserList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import { addNewUser, removeUser } from '../actions/user';

const randomNumber = () => {
  return 1000 + Math.trunc((Math.random() * 9000));
}

function HomePage() {

  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);

  const userList = useSelector(state => state.user.list);

  const dispatch = useDispatch();

  console.log('Hobby list: ', hobbyList, activeId, userList);

  const handleAddHobbyClick = () => {

    const newId = randomNumber();

    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`
    }

    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  }

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  }

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

      <button onClick={handleAddHobbyClick}>Random hobby</button>

      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />

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