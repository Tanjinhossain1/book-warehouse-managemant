import React from 'react';

const Deals = () => {
    return (
        <div className='md:flex justify-around items-center mt-12 mb-12 p-12 bg-[#f6eee0]'>
            <div>
                <h1 className='md:hidden sm:block text-center text-3xl text-blue-800 font-bold'>Discount</h1>
                <img src="https://i.ibb.co/gr6xqPq/percent-removebg-preview.png" alt="" />
            </div>
            <div className='md:w-2/4 sm:w-4/4 mx-auto'>
                <h1 className='text-4xl mb-8 text-blue-900 font-semibold'>Deals on Great Reads <br /> for 2022</h1>
                <p>The newest suspense novel from the authors. We give you the best book for you in 30% off.</p>
                <button className='border text-white font-semibold mt-6 py-2 px-8 rounded-3xl bg-orange-500'> View More</button>
            </div>
        </div>
    );
};

export default Deals;