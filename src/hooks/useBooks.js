import { useEffect, useState } from 'react';

const useBooks = () => {
    const [books, setBooks] = useState([]);
    console.log(books)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/books`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return [books, setBooks]
};

export default useBooks;