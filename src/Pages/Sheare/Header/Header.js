import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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
                    <h1 className='text-4xl'>Books-Warehouse</h1>
                </div>
                <div className='text-2xl mt-2'>
                    <Link className='mx-4' to='/home'>Home</Link>
                    <Link className='mx-4' to='/addnewitem'>AddItem</Link>
                    <Link className='mx-4' to='/manageinventory'>ManageItems</Link>
                    <Link className='mx-4' to='/myitems'>MYItems</Link>
                   {
                       user ? <button onClick={()=>logout()}>Log Out</button>:  <Link to='/login'>Login</Link>
                   }
                </div>
            </nav>
        </div>
    );
};

export default Header;