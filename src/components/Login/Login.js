import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    // const {signInUseGoogle, signInUseGithub} = useFirebase();
    const {signInUseGoogle, signInUseGithub} = useAuth(); //useFirebase পরিবর্তে useAuth();
    return (
        <div>
            <h1>Pls login</h1>
            <button onClick={signInUseGoogle}>Google sign In</button>
            <br />
            <button onClick={signInUseGithub}>Github sign In</button>

            <br />
            <Link to='/register'> New user ? </Link>
        </div>
    );
};

export default Login;