import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useBooks from '../../hooks/useBooks';
import Book from '../Home/Book/Book';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [books, setBooks] = useBooks();
    const myItem = books.filter(book => user?.email === book.email);
    console.log(myItem)
    const deleteBook = (id) => {
        const confirmDelete = window.confirm('Are You Sure To Delete It.')
        if (confirmDelete) {
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
    return (
        <div className='grid grid-cols-3'>
            {
                myItem.map(book => <Book book={book} key={book._id}><button onClick={() => deleteBook(book._id)} className='py-3 font-semibold px-8 rounded-3xl  bottom-0 bg-red-500 mt-4 text-white'>Delete</button></Book>)
            }
        </div>
    );
};

export default MyItems;