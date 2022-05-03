import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    console.log(user?.email)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, event) => {
        console.log(data)
        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => event.target.reset())
    };
    //   name, price, img, description, quantity, supplierName,

    return (
        <form className='flex flex-col w-1/4 mx-auto mt-6' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2 border p-1 rounded-lg'  defaultValue={user?.email}  {...register("email")} />

            <input className='mb-2 border p-1 rounded-lg' placeholder='Name' {...register("name", { required: true })} />
            {errors.name && <small className='text-red-600'>This field is required</small>}


            <input className='mb-2 border p-1 rounded-lg' placeholder='Price' {...register("price", { required: true })} />
            {errors.price && <small className='text-red-600'>This field is required</small>}

            <input className='mb-2 border p-1 rounded-lg' placeholder='Quantity' {...register("quantity", { required: true })} />
            {errors.quantity && <span className='text-red-600'>This field is required</span>}

            <input className='mb-2 border p-1 rounded-lg' placeholder='SupplierName' {...register("supplierName", { required: true })} />
            {errors.supplierName && <span className='text-red-600'>This field is required</span>}

            <input className='mb-2 border p-1 rounded-lg' placeholder='Image' {...register("img", { required: true })} />
            {errors.img && <span className='text-red-600'>This field is required</span>}


            <textarea className='mb-2 border p-1 rounded-lg' placeholder='Description' {...register("description", { required: true })} />
            {errors.description && <span className='text-red-600'>This field is required</span>}

            <input type="submit" className='mb-2 border rounded-lg bg-blue-600 text-white font-semibold text-xl py-2 ' value='Add Item' />
        </form>
    );
};

export default AddNewItem;