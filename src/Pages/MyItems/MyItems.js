import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useBooks from '../../hooks/useBooks';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [books] = useBooks();
   const myItem =  books.filter(book => user?.email === book.email);
   console.log(myItem)
    return (
        <div>
            
        </div>
    );
};

export default MyItems;