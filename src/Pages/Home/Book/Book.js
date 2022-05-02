import React from 'react';

const Book = ({ book }) => {
    const { name, price, img, description, quantity, supplierName } = book;
    return (
        <div className='m-6 border rounded-lg  shadow-lg hover:shadow-2xl'>
            <div className='flex justify-center'>
                <img className='w-[100%] h-[550px] rounded-t-lg hover:shadow-2xl' src={img} alt="" />
            </div>
            <div className='p-4'>
                <h4 className='text-blue-800 text-xl font-semibold'> {name}</h4>
                <p>Price: <span className='text-pink-600 font-semibold'>{price}$</span></p>
                <p>Quantity: <span className=' font-bold'> {quantity}</span></p>
                <p>Description: <small>{description}</small></p>
                <p>SupplierName: {supplierName}</p>
            </div>
        </div>
    );
};

export default Book;