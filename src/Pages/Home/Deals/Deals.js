import React from 'react';

const Deals = () => {
    return (
        <div className='flex justify-around items-center mt-12 mb-12 p-12 bg-[#f6eee0]'>
            <div>
                <img src="https://i.ibb.co/gr6xqPq/percent-removebg-preview.png" alt="" />
            </div>
            <div className='w-2/4 mx-auto'>
                <h1 className='text-4xl mb-8 text-blue-900 font-semibold'>Deals on Great Reads <br /> for 2022</h1>
                <p>The newest suspense novel from the authors behind the Wife Between Us introduces us to Jessica Ferris.</p>
                <button className='border mt-6 py-2 px-8 rounded-3xl bg-orange-500'> View More</button>
            </div>
        </div>
    );
};

export default Deals;