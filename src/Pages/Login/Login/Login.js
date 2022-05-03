import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const dynamic = 'ok done';
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='w-1/4 mx-auto'>
                <div>
                    <h1 className='text-2xl'>Login</h1>

                </div>
                <form className='flex flex-col'>
                    <input type="email" name="email" className='border  p-1' placeholder={`email`} id="" required />
                    <div className='flex flex-col mt-2 relative'>
                        <input className='border mb-6 p-1 w-4/4' type="email" name="password" placeholder={`Password `} id="" required />

                        {open ? <FontAwesomeIcon onClick={() =>setOpen(!open)} className='absolute ml-80 mt-2 ' icon={faEye} /> : <FontAwesomeIcon  onClick={() => setOpen(!open)} className='absolute ml-80 mt-2 ' icon={faEyeSlash} />}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;