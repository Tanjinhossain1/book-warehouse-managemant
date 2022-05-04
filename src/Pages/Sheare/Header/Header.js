import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import 'flowbite';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const [navOpen, setNavOpen] = useState(false)
    return (
        <nav className=' lg:bg-[#f6eee0] bg-[#f6eee0] navColor sm:bg-[#056964] py-2 lg:flex justify-around '>
            <div className='flex justify-between  '>
            <div>
                        <h1 className='text-4xl mt-1 sm:text-white lg:text-black font-semibold '>Book-Warehouse</h1>
                    </div>
            <div onClick={() => setNavOpen(!navOpen)} className='lg:hidden  sm:text-white'>
                {!navOpen ? <FontAwesomeIcon className=' w-10 h-10' icon={faBars} /> : <FontAwesomeIcon className=' w-10 h-10 ' icon={faXmark} />}

                </div>
            </div>
        
            <div  >
              

                <ul className={`lg:flex mt-2 navText sm:bg-[#056964] lg:text-black  sm:text-white lg:bg-transparent justify-center lg:static absolute w-full text-center duration-700 ease-in ${navOpen ? 'top-11' : 'top-[-200px]'}`}>

                    <NavLink className={({ isActive }) => isActive ? 'text-red-500 border-b-4 block border-red-500 mx-4' : 'mx-4  border-b-4 border-b-white block hover:text-orange-600 hover:border-orange-600'} to='/home'>Home</NavLink>

                    {user && <NavLink className={({ isActive }) => isActive ? 'text-red-500 border-b-4 border-red-500 mx-4 block' : 'mx-4 block  border-b-4 border-b-white hover:text-orange-600 hover:border-orange-600'} to='/addnewitem'>AddItem</NavLink>}

                    {user && <NavLink className={({ isActive }) => isActive ? 'text-red-500 border-b-4 border-red-500 mx-4 block' : 'mx-4 block  border-b-4 border-b-white hover:text-orange-600 hover:border-orange-600'} to='/manageinventory'>ManageItems</NavLink>}

                    {user && <NavLink className={({ isActive }) => isActive ? 'text-red-500 border-b-4 border-red-500 mx-4 block' : 'mx-4 block  border-b-4 border-b-white hover:text-orange-600 hover:border-orange-600'} to='/myitems'>MYItems</NavLink>}

                    <NavLink className={({ isActive }) => isActive ? 'text-red-500 border-b-4 border-red-500 mx-4 block' : 'mx-4 block  border-b-4 border-b-white hover:text-orange-600 hover:border-orange-600'} to='/blog'>Blog</NavLink>
                    {
                        user ? <button className='ml-3 border rounded-full bg-blue-500  px-4 font-semibold text-white hover:border-blue-700 hover:bg-white hover:text-black' onClick={() => logout()}>Log Out</button> : <Link to='/login'>Login</Link>
                    }

                </ul>
            </div>
        </nav>
    );
};

export default Header;