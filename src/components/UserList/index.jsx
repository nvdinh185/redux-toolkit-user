import React from 'react';
import PropTypes from 'prop-types';
import './UserList.css';

UserList.propTypes = {
    UserList: PropTypes.array
};

UserList.defaultProps = {
    UserList: []
};

function UserList(props) {
    const { userList, onUserClick } = props;

    const handleClick = (id) => {
        if (onUserClick) {
            onUserClick(id);
        }
    }

    return (
        <ul>
            {userList.map(user => (
                <li
                    key={user.id}
                    onClick={() => handleClick(user.id)}
                >
                    {user.name}
                </li>
            ))}
        </ul>
    );
}

export default UserList;