import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import BookType from '../BookType/BookType';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className='text-center text-yellow-700 font-bold text-4xl mt-12'>Book Type</h1>
                <BookType></BookType>
            </div>
            <Books></Books>
        </div>
    );
};

export default Home;