import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <nav className='flex justify-around bg-[#f6eee0] py-2'>
                <div>
                    <h1 className='text-4xl'>Book-Warehouse</h1>
                </div>
                <div className='text-xl mt-2'>
                    <NavLink  className={({isActive})=>isActive?'text-red-500 mx-4': 'mx-4'} to='/home'>Home</NavLink>
                    {user && <NavLink className={({isActive})=>isActive?'text-red-500 mx-4': 'mx-4'} to='/addnewitem'>AddItem</NavLink>}
                    {user && <NavLink className={({isActive})=>isActive?'text-red-500 mx-4': 'mx-4'} to='/manageinventory'>ManageItems</NavLink>}
                    {user && <NavLink className={({isActive})=>isActive?'text-red-500 mx-4': 'mx-4'} to='/myitems'>MYItems</NavLink>}

                    <NavLink className={({isActive})=>isActive?'text-red-500 mx-4': 'mx-4'} to='/blog'>Blog</NavLink>
                    {
                        user ? <button onClick={() => logout()}>Log Out</button> : <Link to='/login'>Login</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;