import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#f6eee0]  round '>
            <div className='pt-12 w-3/4 mx-auto lg:flex items-center'>
                <div className='lg:w-3/4 sm:w-4/4  '>
                    <h1 className='text-blue-900 text-4xl font-semibold'>2022 Reading Challenge</h1>
                    <p className='text-yellow-700'>Want to get more out of your reading life in 2022? We've got a challenge just for you,and a free reading challenge kit to help you see it through. We care about quality way more than we.</p>
                    <button className='border-1 py-2 px-6 bg-orange-500 rounded-3xl mt-4 text-white'>Learn More</button>
                </div>
                <div>
                    <img src="https://i.ibb.co/XDZKq21/bookread-removebg.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;