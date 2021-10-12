// import userEvent from '@testing-library/user-event';
import React from 'react';
import { Redirect, Route,  } from 'react-router';
import useAuth from '../../hooks/useAuth';

// const PrivateRoute = (props) => {
    const PrivateRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const {user} = useAuth();
    return (
        <Route
        {...rest} 
        render = {({location}) => user.email ? 
        children : 
        <Redirect
        to={{
            pathName:'/login',
            state: {from: location}
        }}
        ></Redirect>}
        >    
        </Route>
    );
};

export default PrivateRoute;
