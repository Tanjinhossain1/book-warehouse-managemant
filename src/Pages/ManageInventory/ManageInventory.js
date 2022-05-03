import React from 'react';
import useBooks from '../../hooks/useBooks';

const ManageInventory = () => {
    const [books] = useBooks();
    console.log(books)
    return (
        <div>
            <h1>manage</h1>
        </div>
    );
};

export default ManageInventory;