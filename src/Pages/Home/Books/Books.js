import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='ml-8 mt-12 text-blue-800 font-bold text-2xl'>Books</h1>
            <div className='grid grid-cols-3'>
                {
                    books.slice(0,6).map((book, index) => <Book book={book} key={index}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;