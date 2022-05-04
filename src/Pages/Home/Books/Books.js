import { useNavigate } from 'react-router-dom';
import useBooks from '../../../hooks/useBooks';
import Book from '../Book/Book';

const Books = () => {
    const [books] = useBooks();
    const navigate = useNavigate()
  
    return (
        <div className='w-4/4 mx-auto'>
            <h1 className='ml-8 mb-12 mt-12 text-blue-800 font-bold text-2xl'>Books Inventory</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 books grid-cols-1'>
                {
                    books.slice(0,6).map((book) => <Book book={book} key={book._id}><button className='py-3 mt-2 font-semibold px-8 rounded-3xl  bottom-0 bg-green-500 text-white'  onClick={()=>navigate(`/update/${book._id}`)}>Update</button> </Book>)
                }
            </div>

        </div>
    );
};

export default Books;