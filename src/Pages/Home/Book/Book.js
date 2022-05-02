import React from 'react';

const Book = ({ book }) => {
    const { name, price, img, description, quantity, supplierName } = book;
    return (
        <div className='m-6'>
           <div className='flex justify-center'>
           <img className='w-[300px] h-[500px]' src={img} alt="" />
           </div>
            <h4>{name}</h4>
            <p>{price}</p>
            <p>{description}</p>
            <p>{quantity}</p>
            <p>{supplierName}</p>
        </div>
    );
};

export default Book;