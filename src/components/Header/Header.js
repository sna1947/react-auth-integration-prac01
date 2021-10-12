import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    // const {user, logout} = useFirebase();
    const {user, logout} = useAuth(); //useFirebase পরিবর্তে useAuth();
    return (
        <div className='hdr'>
            <Link to='/home'>Home</Link>
            <Link to='/shipping'>Shipping</Link>
            <Link to='/placeorder'>Place Order</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <span>{user.displayName} </span>
            {user?.email && <button onClick={logout}  className='log-out'>Log Out</button>}
        </div>
    );
};

export default Header;