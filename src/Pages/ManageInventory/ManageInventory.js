import React from 'react';
import { Circles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import Book from '../Home/Book/Book';

const ManageInventory = () => {
    const [books, setBooks] = useBooks();
    const deleteBooks = (id) => {
        console.log(id)
        const confirmDelete = window.confirm('Are You Sure To Delete It.')
        if(confirmDelete){
        fetch(`http://localhost:5000/deleteBook/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remainingBooks = books.filter(book => book._id !== id)
                setBooks(remainingBooks)
                console.log(data)
            })
        }

    }
    if(books.length === 0 ){
        return <div className='flex justify-center my-32'>
        <Circles color="#00BFFF" height={80} width={80} />
    </div>
    }
    return (
        <div className=''>
            <h1 className='text-center text-3xl my-6 text-blue-700 font-semibold'>Manage Your Inventories</h1>
            <Link className='border py-2 px-6 ml-16  rounded-full text-white bg-green-800' to='/addnewitem '>Add New Item</Link>
            <div className='grid mt-14 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 '>
                {
                    books.map((book) => <Book book={book} key={book._id}><button onClick={() => deleteBooks(book._id)} className='py-3 font-semibold px-8 rounded-3xl  bottom-0 bg-red-500 mt-4 text-white'>Delete</button></Book>)
                }
            </div>

        </div>
    );
};

export default ManageInventory;