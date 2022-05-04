import React from 'react';

const Book = ({ book,children }) => {
    const { name, price, img, description, quantity, supplierName,_id } = book;
    return (
        <div className='mt-16 mx-6 mb-6 hover:bottom-10  relative border rounded-lg  shadow-lg hover:shadow-2xl '>
            <div className='flex justify-center'>
                <img className='w-[100%] h-[450px] rounded-t-lg hover:shadow-2xl' src={img} alt="" />
            </div>
            <div className='p-4 '>
                <h4 className='text-blue-800 text-xl  font-semibold'> {name}</h4>
                <p>Price: <span className='text-pink-600 font-semibold'>{price}$</span></p>
                <p>Quantity: <span className='font-bold'> {quantity}</span></p>
                <p>Description: <small>{description}</small></p>
                <p>SupplierName: {supplierName}</p>
                <button>{children}</button>
            </div>
        </div>
    );
};

export default Book;