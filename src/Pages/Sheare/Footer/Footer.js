import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className='bg-[#021038] p-12'>
            <div className='grid text-white grid-cols-4 w-3/4 mx-auto'>
                <div>
                    <h4 className='text-xl mb-4 text-gray-400'>EXPLORE</h4>
                    <Link  to='/home'>Home</Link>
                    <p>Pricing</p>
                    <p>Buy</p>
                </div>
                <div>
                    <h4 className='text-xl mb-4 text-gray-400'>ABOUT</h4>
                    <Link to='/about'>About Us</Link>
                    <Link className='block' to='/blog'>Blog</Link>
                    <p>Privacy Policy</p>
                    <p>Terms Of Services</p>
                </div>
                <div>
                    <h4 className='text-xl mb-4 text-gray-400'>HELP</h4>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h4 className='text-xl mb-4 text-gray-400'>CONNECT</h4>
                    <p>FaceBook</p>
                </div>
            </div>
            <hr className='w-2/4 mx-auto mt-6'/>
            <div className='text-white text-center mt-8'>
                Copyright <span className='text-xl'>©</span> {year} My Website. All Right Reserved.
            </div>
        </div>
    );
};

export default Footer;