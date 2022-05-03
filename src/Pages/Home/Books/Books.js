import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='ml-8 mt-12 text-blue-800 font-bold text-2xl'>Books Inventory</h1>
            <div className='grid grid-cols-3'>
                {
                    books.slice(0,6).map((book) => <Book book={book} key={book._id}><button className='py-3 mt-2 font-semibold px-8 rounded-3xl  bottom-0 bg-green-500 text-white'>Update</button> </Book>)
                }
            </div>

        </div>
    );
};

export default Books;