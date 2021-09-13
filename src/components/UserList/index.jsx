import PropTypes from 'prop-types';
import React from 'react';
import './UserList.css';

UserList.propTypes = {
    UserList: PropTypes.array,
    onEditUserClick: PropTypes.func,
    onRemoveUserClick: PropTypes.func
};

UserList.defaultProps = {
    UserList: [],
    onEditUserClick: null,
    onRemoveUserClick: null
};

function UserList(props) {
    const { userList, onEditUserClick, onRemoveUserClick } = props;

    const handleRemoveClick = (id) => {
        if (onRemoveUserClick) {
            onRemoveUserClick(id);
        }
    }

    const handleEditClick = (id) => {
        if (onEditUserClick) {
            onEditUserClick(id);
        }
    }

    return (
        <ul>
            {userList.map(user => (
                <li
                    key={user.id}
                >
                    {user.name}
                    <button onClick={() => handleEditClick(user.id)}>Edit</button>
                    <button onClick={() => handleRemoveClick(user.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default UserList;