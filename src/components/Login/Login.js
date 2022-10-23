import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }
    return (
        <div>
            <form onSubmit={handleLogin} className='w-25 register-form border text-center mx-auto p-2  my-3'>
                <h6>Login</h6>
                <hr />
                <input type="email" name="email" id="email" placeholder='Enter  email' />
                <input type="password" name="password" id="password" placeholder='Enter  password' />
                <button className='bg-warning w-100 border-0 py-1 rounded' type='submit'>Create account</button>

                <p>Don't have an account? <Link to="/register">Create an account</Link></p>
            </form>
            <div className='divider'>
                <span>----------------- Or -----------------</span>
            </div>
            <div className='signin-option'>
                <div className='bg-light d-flex align-items-center text-center gap-2  px-2 border mt-2 mx-auto rounded'>
                    <FaFacebook />
                    <small>Continue with Google</small>
                </div>
                <div className='bg-light d-flex align-items-center text-center gap-2 px-2 border mt-2 mx-auto rounded'>
                    <FaGoogle />
                    <small>Continue with Facebook</small>
                </div>
            </div>
        </div>
    );
};

export default Login;