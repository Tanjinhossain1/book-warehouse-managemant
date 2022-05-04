import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CirclesWithBar } from 'react-loader-spinner';
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
    if(books.length === 0 ){
        return <div className='flex justify-center my-32'>
        <CirclesWithBar color="#00BFFF" height={80} width={80} />
    </div>
    }
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 mt-8'>
            {
                myItem.map(book => <Book book={book} key={book._id}><button onClick={() => deleteBook(book._id)} className='py-3 font-semibold px-8 rounded-3xl  bottom-0 bg-red-500 mt-4 text-white'>Delete</button></Book>)
            }
        </div>
    );
};

export default MyItems;