import React from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value
        const lastName = form.lastName.value;
        const fullName = firstName + " " + lastName;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(fullName, email, password, confirmPassword);
    }
    return (
    <div>
            <form onSubmit={handleRegistration} className='w-25 register-form border text-center mx-auto p-2  my-3'>
            <h6>Create an account</h6>
            <hr />
                <input type="text" name="firstName" id="firstName" placeholder='First name' />
                <input type="text" name="lastName" id="lastName" placeholder='Last name'  />
            <input type="email" name="email" id="email" placeholder='Enter  email' />
            <input type="password" name="password" id="password" placeholder='Password'  />
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm password'  />
            <button className='bg-warning w-100 border-0 py-1 rounded' type='submit'>Create account</button>

                <p>Already have an account? <Link to="/login">Login</Link></p>
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

export default Register;