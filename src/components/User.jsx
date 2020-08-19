import React from 'react';

function User(props) {
    const {id, query} = props;
    return (
        <li>
            <span>id: {id} query:{query}</span>
        </li>
    )
}

export default User
