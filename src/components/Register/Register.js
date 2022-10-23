import React, { useContext, useState } from 'react';
import { FaFacebook, FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import "./Register.css"

const Register = () => {
    const [toggle, setToggle] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const { createUser, setUser, updateUserInfo, handleGoogleSignin, handleFacebookSignin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

            if (password !== confirmPassword) {
                alert("Password is not matched");
                return;
            }
            
            createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                handleUpdateProfile(name, photoURL);
                form.reset();
                navigate("/login")
            })
            .catch((error) => console.log(error))

        
    }



    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserInfo(profile)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleFacebook = () => {
        handleFacebookSignin()
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => console.log(error))
    }

    return (
    <div>
            <form onSubmit={handleRegistration} className='w-25 register-form border text-center mx-auto p-2  my-3'>
            <h6>Create an account</h6>
            <hr />
                <input type="text" name="name" id="name" placeholder='Name' />
                <input type="text" name="photoURL" id="photoURL" placeholder='photoURL' />
                <input type="email" name="email" id="email" placeholder='Enter  email' />
                    
            <div className='d-flex align-items-center'>
            <input type={toggle ? "text" : "password"} name="password" id="password" placeholder='Password'  />
                    {
                        toggle ? <FaEye onClick={() => setToggle(!toggle)} />
                            : <FaEyeSlash onClick={() => setToggle(!toggle)} />
                    }
            </div>
            <div className='d-flex align-items-center'>
                    <input type={confirm ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder='confirm Password'  />
                    {
                        confirm ? <FaEye onClick={() => setConfirm(!confirm)} />
                            : <FaEyeSlash onClick={() => setConfirm(!confirm)} />
                    }
            </div>
            <button className='bg-warning w-100 border-0 py-1 rounded' type='submit'>Create account</button>

                <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
        <div className='divider'>
            <span>----------------- Or -----------------</span>
        </div>
        <div className='signin-option'>
                <div onClick={handleGoogleSignin} className='bg-light d-flex align-items-center text-center gap-2  px-2 border mt-2 mx-auto rounded cursor-pointer'>
                <FaFacebook />
                <small>Continue with Google</small>
            </div>
                <div onClick={handleFacebook} className='bg-light d-flex align-items-center text-center gap-2 px-2 border mt-2 mx-auto rounded'>
                <FaGoogle />
                <small>Continue with Facebook</small>
            </div>
        </div>
    </div>
    );
};

export default Register;