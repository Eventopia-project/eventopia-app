import React from 'react';

const UserCard = ({ name, location, email, role }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    );
};

export default UserCard;