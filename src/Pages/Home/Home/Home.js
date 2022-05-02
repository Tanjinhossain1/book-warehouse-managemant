import React from 'react';
import Banner from '../Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faChildren, faGhost, faHeartCircleCheck, faExplosion } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className='text-center text-yellow-700 font-bold text-4xl mt-12'>Book Type</h1>
                <div className=''>
                    <div className='grid grid-cols-5 mt-12 w-3/4 mx-auto'>
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
            </div>
        </div>
    );
};

export default Home;