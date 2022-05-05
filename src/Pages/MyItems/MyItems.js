import { faCalendarXmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CirclesWithBar } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useBooks from '../../hooks/useBooks';
import Book from '../Home/Book/Book';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/myBooks`, {
            headers: {
                'authorization': `${user?.email} ${localStorage.getItem("token")}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    toast(data.error)
                    setError(data.error)
                }
                setBooks(data)
            })
    }, [setBooks, user?.email])


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
    if (books.length === 0) {
        return <div className='flex justify-center my-32'>
            <div>
                <CirclesWithBar color="#00BFFF" height={80} width={80} />
                <p className='text-gray-400'>I Think You Dont Add Any Items</p>
            </div>
        </div>
    }
    const logout = () => {
        signOut(auth);
    };
    return (
   <div>
       <p className='text-center sm:mt-32 mt-32 lg:mt-12 2xl:mt-12 md:mt-12 text-green-700 font-bold text-2xl'>My Added All Items</p>
            <div className='grid md:grid-cols-2 relative grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 mt-8'>
                
                {
                    books.length ?
                        books.map(book => <Book book={book} key={book._id}><button onClick={() => deleteBook(book._id)} className='py-3 font-semibold px-8 rounded-3xl  bottom-2  bg-red-500 mt-4 text-white hover:border-red-700 delay-150 absolute hover:border  duration-700 ease-in-out  hover:bg-white hover:text-black'>Delete <FontAwesomeIcon icon={faCalendarXmark}/></button></Book>)
                        :
                        <p className='text-red-700 text-4xl text-center'>{error}</p>
                }
                {!books.length && <div className='text-center text-red-500'>
                    <p className='text-3xl mb-2'>Why You come here</p>
                    <p className='text-3xl '>Go and login Again Then Access This page.</p>
                    <button onClick={() => logout()} className='border text-xl py-2 px-8 rounded-full font-bold bg-red-700 text-white mt-16'>LogOut <FontAwesomeIcon className='ml-2' icon={faRightFromBracket} /></button>
                </div>}
            </div>
   </div>
    );
};

export default MyItems;