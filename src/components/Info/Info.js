import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './info.css';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
const Info = () => {
    return (
     
       
           
            <div className="flex  gap-5 text-white grid grid-cols-1 lg:grid-cols-3 ">
                <div className=" h-20 card bg-base-300 rounded-box place-items-center bg-gradient-to-r from-primary to-secondary">
                    <div className='flex'>
                    <div className='text-6xl text-white'>
                    <FontAwesomeIcon icon={faClock} />

                    </div>
                    <div className='pl-2 text-left'>
                        <h1>Opening Hours</h1>
                        <small>Lorem ipsum dolor sit amet.</small>
                    </div>

                    </div>
                   
                </div>
                <div className="px-2"></div>
                <div className=" h-20  card bg-base-300 rounded-box place-items-center bg-accent">
                    <div className='flex'>
                    <div className='text-6xl text-white'>
                    <FontAwesomeIcon icon={faLocationDot} />

                    </div>
                    <div className='pl-2 text-left'>
                        <h1>Visit our location</h1>
                        <small>Brooklyn, NY 10036, United States</small>
                    </div>

                    </div>
                   
                </div>
                <div className="px-2"></div>
                <div className="h-20 card bg-base-300 rounded-box place-items-center bg-gradient-to-r from-primary to-secondary">
                    <div className='flex'>
                    <div className='text-6xl text-white'>
                    <FontAwesomeIcon icon={faPhone} />

                    </div>
                    <div className='pl-2 text-left'>
                        <h1>Contact us now</h1>
                        <small>+000 123 456789</small>
                    </div>

                    </div>
                   
                </div>
            </div>
       
    );
};

export default Info;