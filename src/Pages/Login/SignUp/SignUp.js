import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [open, setOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const handleSignUp = (event) =>{
        event.preventDefault()

    }
    return (
        <div className=''>
            <div className='w-1/4 mx-auto border-2 border-green-500 rounded-lg p-4 my-5'>
                <div>
                    <h1 className='text-2xl mb-4 font-semibold'>Create Account</h1>

                </div>
                <form onSubmit={handleSignUp} className='flex flex-col mb-4'>

                        <input className='border p-1 mb-2' type="text" name='name' placeholder='Name' />
                    <input type="email" name="email" className='border  p-1' placeholder={`Email`} id="" required />

                    <div className='flex flex-col mt-2 relative'>
                        <input className='border mb-2 px-1 py-1 w-4/4 ' type={`${open ? 'text' : 'password'}`} name="password" placeholder={`Password `} id="" required />

                        {open ? <FontAwesomeIcon onClick={() => setOpen(!open)} className='absolute ml-[316px] mt-2 ' icon={faEye} /> : <FontAwesomeIcon onClick={() => setOpen(!open)} className='absolute ml-[316px] mt-2 ' icon={faEyeSlash} />}
                    </div>

                    <div className='flex flex-col relative'>
                        <input className='border mb-6 px-1 py-1 w-4/4 ' type={`${confirmOpen ? 'text' : 'password'}`} name="confirmPassword" placeholder={`Confirm-Password `} id="" required />

                        {confirmOpen ? <FontAwesomeIcon onClick={() => setConfirmOpen(!confirmOpen)} className='absolute ml-[316px] mt-2 ' icon={faEye} /> : <FontAwesomeIcon onClick={() => setConfirmOpen(!confirmOpen)} className='absolute ml-[316px] mt-2 ' icon={faEyeSlash} />}
                    </div>
                    <input className=' shadow-style bg-purple-700 rounded-full w-3/4 mx-auto text-white font-semibold py-2 hover:text-black border-0 hover:bg-white' type="submit" value="Login" />
                </form>
                <p>Already Have An Account? <Link className='text-purple-700 font-semibold' to='/login'>Login</Link></p>
                <div className='grid grid-cols-3 items-center mt-4'>
                    <hr />
                    <p className='ml-11'>or</p>
                    <hr />
                </div>
                <button className=''><img className='shadow-2xl rounded-full mt-4 hover:bg-black' src="https://i.ibb.co/x8NkjXG/images-1-removebg-preview.png" alt="" /></button>
            </div>
        </div>
    );
};


export default SignUp;