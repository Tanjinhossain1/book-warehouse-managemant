import React from 'react';
import useBooks from '../../hooks/useBooks';
import Book from '../Home/Book/Book';

const ManageInventory = () => {
    const [books] = useBooks();
    console.log(books)
    return (
        <div className=''>
            <h1>manage</h1>
            
                <div className='grid grid-cols-4 '>
                {
                    books.map((book) => <Book book={book} key={book._id}><button className='py-3 font-semibold px-8 rounded-3xl  bottom-0 bg-red-500 text-white'>Delete</button></Book>)
                }
            </div>
            
        </div>
    );
};

export default ManageInventory;