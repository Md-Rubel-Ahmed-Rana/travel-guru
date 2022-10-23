import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container-fluid px-5 py-2 bg-primary d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center gap-2 '>
                <img style={{height: "40px", width: "40px", borderRadius: "50%"}} src="https://i.pinimg.com/originals/2e/cf/73/2ecf7364cd78b7222311518159a72179.jpg" alt="" />

                <h4>Travel Lover</h4>
            </div>
            <input type="text" name="" id="" className='bg-light border-0 rounded px-2' placeholder='Search your destination'/>
            <div className='d-flex gap-2'>
                <Link to="/home" className='text-decoration-none text-white'>Home</Link>
                <Link to="/destination" className='text-decoration-none text-white'>Destination</Link>
                <Link to="/register" className='text-decoration-none text-white'>Register</Link>
                <Link to="/login" className='text-decoration-none text-white'>Login</Link>
            </div>
        </div>
    );
};

export default Header;