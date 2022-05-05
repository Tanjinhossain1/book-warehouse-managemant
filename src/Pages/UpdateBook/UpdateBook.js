import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
const UpdateBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate()
    const { name, price, img, description, quantity, supplierName, _id } = book;
    // console.log(books)
    useEffect(() => {
        fetch(`http://localhost:5000/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id])
    // const [number, setNumber] = useState(0);
    // console.log(number)

    const deleteQuantity = () => {

        if (quantity > 0) {
            book.quantity = book.quantity - 1
            setBook({ ...book })

        }
        const quantitys = book.quantity

        fetch(`http://localhost:5000/books/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantitys })
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }


    const addQuantity = (event) => {
        event.preventDefault();
        const newQuantity = event.target.newQuantity.value;
        if (newQuantity > 0) {
            const addNewQuantity = +newQuantity + book.quantity;
            fetch(`http://localhost:5000/bookNewQuantity/${_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ addNewQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    book.quantity = addNewQuantity;
                    setBook({ ...book })
                    event.target.reset()
                })
        } else {
        alert('minus quantity are not allow')
        }
    }
    return (
        <div>
            <div className='m-6 border rounded-lg w-2/4 mx-auto grid grid-cols-1 lg:grid-cols-2  shadow-lg hover:shadow-2xl'>
                <div className='flex justify-center'>
                    <img className=' rounded-t-lg hover:shadow-2xl' src={img} alt="" />
                </div>
                <div className='p-4 '>
                    <h4 className='text-blue-800 text-xl  font-semibold'> {name}</h4>
                    <p>Price: <span className='text-pink-600 font-semibold'>{price}$</span></p>
                    <p>Quantity: <span className=' font-bold'> {quantity}</span></p>
                    <p>Description: <small>{description}</small></p>
                    <p><small>SupplierName: {supplierName}</small></p>
                    <button disabled={!quantity} onClick={deleteQuantity} className='py-3 mt-2 font-semibold px-8 rounded-3xl  bottom-0 bg-red-500 text-white'>Delivered</button>
                    <form onSubmit={addQuantity} className='mt-4'>
                        <input className='border py-1 rounded-l-lg' placeholder='Add Quantity' type="number" name='newQuantity' />
                        <input type="submit" className='border text-white px-2 rounded-r-lg bg-green-600 py-1' value="Restock Item" />
                    </form>

                </div>
            </div>
            <div className='justify-end w-3/4 flex mb-4'>
                <Link to='/manageinventory'><button onClick={() => navigate('manageinventory')} className='border text-2xl rounded-2xl py-3 px-8 bg-green-700 text-white font-bold'>Manage Inventories <FontAwesomeIcon className='text-2xl mt-1' icon={faArrowRightLong}></FontAwesomeIcon></button></Link>
            </div>
        </div>
    );
};

export default UpdateBook;