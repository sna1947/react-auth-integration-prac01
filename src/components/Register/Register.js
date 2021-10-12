import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Pls Register</h1>
            <form>
                <input type="email" placeholder='enter your email' /><br />
                <input type="password" placeholder='enter your password'/><br />
                <input type="submit" />
            </form><br />
            <Link to='/login'> Already Register ? </Link>
        </div>
    );
};

export default Register;