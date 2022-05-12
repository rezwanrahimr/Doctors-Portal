import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './info.css';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
const Info = () => {
    return (
     
       
        <div className=''>
            <div className="flex w-full px-12 text-white">
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-gradient-to-r from-primary to-secondary">
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
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-accent">
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
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-gradient-to-r from-primary to-secondary">
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
        </div>
    );
};

export default Info;