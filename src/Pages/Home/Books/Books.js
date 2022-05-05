import { useNavigate } from 'react-router-dom';
import useBooks from '../../../hooks/useBooks';
import Book from '../Book/Book';

const Books = () => {
    const [books] = useBooks();
    const navigate = useNavigate();

    return (
        <div className='w-4/4 mx-auto'>
            <h1 className='ml-12 mb-12 mt-12 text-blue-800 font-bold text-2xl'>Books Inventory</h1>
            <div className='grid xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 books grid-cols-1'>
                {
                    books.slice(0,6).map((book) => <Book book={book} key={book._id}>

                     <div className=''>
                     <button className='py-3 font-semibold px-8 rounded-3xl   bg-green-500 text-white hover:border-orange-600 hover:border  duration-700 ease-in-out absolute bottom-2 hover:bg-white hover:text-black '  onClick={()=>navigate(`/update/${book._id}`)}>Update</button>
                         </div> </Book>)
                }
            </div>
        </div>
    );
};

export default Books;