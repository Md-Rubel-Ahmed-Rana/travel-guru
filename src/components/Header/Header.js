import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    return (
        <div className='container-fluid px-5 py-2 bg-primary d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center gap-2 '>
                <img style={{height: "40px", width: "40px", borderRadius: "50%"}} src={user?.photoURL} alt="" />

                <h6>{user?.displayName ? user?.displayName : "No name found"}</h6>
            </div>
            <h6>Email: {user?.email}</h6>
            <div className='d-flex gap-2'>
                <Link to="/home" className='text-decoration-none text-white'>Home</Link>
                <Link to="/destination" className='text-decoration-none text-white'>Destination</Link>
                <Link to="/register" className='text-decoration-none text-white'>Register</Link>
                {
                    user?.uid ? <Link onClick={userSignOut} to="/" className='text-decoration-none text-white'>LogOut</Link> : <Link to="/login" className='text-decoration-none text-white'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;