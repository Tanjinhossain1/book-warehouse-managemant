import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateBook = () => {
    const {id} = useParams();
    const [book, setBook] = useState({});
    const { name, price, img, description, quantity, supplierName,_id } = book;

    useEffect(()=>{
        fetch(`http://localhost:5000/books/${id}`)
        .then(res=>res.json())
        .then(data=>setBook(data) )
    },[id])

    return (
        <div>
          <div className='m-6 border rounded-lg w-2/4 mx-auto grid grid-cols-2  shadow-lg hover:shadow-2xl'>
            <div className='flex justify-center'>
                <img  className=' rounded-t-lg hover:shadow-2xl' src={img} alt="" />
            </div>
            <div className='p-4 '>
                <h4 className='text-blue-800 text-xl  font-semibold'> {name}</h4>
                <p>Price: <span className='text-pink-600 font-semibold'>{price}$</span></p>
                <p>Quantity: <span className=' font-bold'> {quantity}</span></p>
                <p>Description: <small>{description}</small></p>
                <p>SupplierName: {supplierName}</p>
               
            </div>
        </div>
        </div>
    );
};

export default UpdateBook;