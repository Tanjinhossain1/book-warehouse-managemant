import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faChildren, faGhost, faHeartCircleCheck, faExplosion } from '@fortawesome/free-solid-svg-icons';
const BookType = () => {
    return (
        <div>
             <div className='grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-5 mt-12 w-3/4 mx-auto text-[#A88302]'>
                        <div>
                            <FontAwesomeIcon className='text-5xl bg-blue-900 rounded-[60%] px-8 py-10 text-white' icon={faChildren} />
                            <p className='ml-6'>Children</p>
                        </div>
                       <div>
                       <FontAwesomeIcon className='text-5xl bg-blue-900 rounded-[60%] px-8 py-10 text-white' icon={faRobot} />
                       <p  className='ml-8'>Fiction</p>
                       </div>
                        <div>
                        <FontAwesomeIcon className='text-5xl bg-blue-900 rounded-[60%] px-11 py-10 text-white' icon={faGhost} />
                        <p className='ml-8'>Thriller</p>
                        </div>
                        <div>
                        <FontAwesomeIcon className='text-5xl bg-blue-900 rounded-[60%] px-9 py-10 text-white' icon={faHeartCircleCheck} />
                        <p className='ml-8'>Romance</p>
                        </div>
                     <div>
                     <FontAwesomeIcon className='text-5xl bg-blue-900 rounded-[60%] px-9 py-10 text-white' icon={faExplosion} />
                     <p className='ml-8'>Comics</p>
                     </div>
                    </div>
        </div>
    );
};

export default BookType;