import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-around bg-[#f6eee0] py-2'>
                <div>
                    <h1 className='text-4xl'>Books-Warehouse</h1>
                </div>
                <div className='text-2xl mt-2'>
                    <Link className='mx-4' to='/home'>Home</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;