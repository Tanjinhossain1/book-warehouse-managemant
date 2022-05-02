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
        <div>
            <div className='grid grid-cols-3'>
                {
                    books.map((book, index) => <Book book={book} key={index}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;