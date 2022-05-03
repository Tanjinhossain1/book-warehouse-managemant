import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';

const UpdateBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const { name, price, img, description, quantity, supplierName, _id } = book;
    const [books] = useBooks()
    // console.log(books)
    useEffect(() => {
        fetch(`http://localhost:5000/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id])
    // const [number, setNumber] = useState(0);
    // console.log(number)

    const deleteQuantity = () => {
        // console.log(quantity-1)
        let count = {};
        if (quantity > 0) {
            // book.quantity = quantity-1;
            book.quantity = book.quantity - 1
            setBook({ ...book, count })
        }
        console.log(quantity)
        // setNumber(num)
        // console.log(quantity-10)
        // const convert = JSON.parse(quantityDelete)
        // const equiel = JSON.parse(quantityDelete)
        fetch(`http://localhost:5000/books/${_id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({quantity})
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    return (
        <div>
            <div className='m-6 border rounded-lg w-2/4 mx-auto grid grid-cols-2  shadow-lg hover:shadow-2xl'>
                <div className='flex justify-center'>
                    <img className=' rounded-t-lg hover:shadow-2xl' src={img} alt="" />
                </div>
                <div className='p-4 '>
                    <h4 className='text-blue-800 text-xl  font-semibold'> {name}</h4>
                    <p>Price: <span className='text-pink-600 font-semibold'>{price}$</span></p>
                    <p>Quantity: <span className=' font-bold'> {quantity}</span></p>
                    <p>Description: <small>{description}</small></p>
                    <p><small>SupplierName: {supplierName}</small></p>
                    <button onClick={deleteQuantity} className='py-3 mt-2 font-semibold px-8 rounded-3xl  bottom-0 bg-red-500 text-white'>Delivered</button>
                   <div className='mt-4'>
                   <input className='border py-1 rounded-l-lg' placeholder='Add Quantity' type="text" name='quantitys' />
                    <input type="submit" className='border text-white px-2 rounded-r-lg bg-green-600 py-1' value="Add Quantity" />
                   </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateBook;