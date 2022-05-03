import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Circles } from 'react-loader-spinner';

const Login = () => {
    const [email, setEmail] = useState('');
    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    if (user || googleUser) {
        navigate(from)
    }

    const [open, setOpen] = useState(false);
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        // event.target.reset();
    }
    const getEmail = (event) => {
        setEmail(event.target.value)
    }
    const resetPassword = () => {
        sendPasswordResetEmail(email)
    }
    if (loading || googleLoading || sending) {
        return <div className='text-center mt-32'>
            <Circles color="#00BFFF" height={80} width={80} />
        </div>
    }
    return (
        <div className=''>
            <div className='w-1/4 mx-auto border-2 border-purple-800 rounded-lg p-4 my-5'>
                <div>
                    <h1 className='text-2xl mb-4 font-semibold'>Login</h1>

                </div>
                <form onSubmit={handleLogin} className='flex flex-col mb-4'>
                    <input onBlur={getEmail} type="email" name="email" className='border  p-1' placeholder={`Email`} id="" required />
                    <div className='flex flex-col mt-2 relative'>
                        <input className='border  px-1 py-1 w-4/4 ' type={`${open ? 'text' : 'password'}`} name="password" placeholder={`Password `} id="" required />

                        {open ? <FontAwesomeIcon onClick={() => setOpen(!open)} className='absolute ml-[316px] mt-2 ' icon={faEye} /> : <FontAwesomeIcon onClick={() => setOpen(!open)} className='absolute ml-[316px] mt-2 ' icon={faEyeSlash} />}
                    </div>

                    <button onClick={resetPassword} className='flex justify-end text-purple-700 font-semibold mb-4'>Forgot Password?</button>


                    {error?.message.slice(23, 42)}
                    <input className=' shadow-style bg-purple-700 rounded-full w-3/4 mx-auto text-white font-semibold py-2 hover:text-black border-0 hover:bg-white' type="submit" value="Login" />
                </form>
                <p>Don't Have An Account? <Link className='text-purple-700 font-semibold' to='/signup'>Create Account</Link></p>
                <div className='grid grid-cols-3 items-center mt-4'>
                    <hr />
                    <p className='ml-11'>or</p>
                    <hr />
                </div>
                <button onClick={() => signInWithGoogle()} className=''><img className='shadow-2xl rounded-full mt-4 hover:bg-black' src="https://i.ibb.co/x8NkjXG/images-1-removebg-preview.png" alt="" /></button>
            </div>
        </div>
    );
};

export default Login;