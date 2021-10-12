import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>Home</h1>
            <h3>User Name: {user.displayName}</h3>
        </div>
    );
};

export default Home;