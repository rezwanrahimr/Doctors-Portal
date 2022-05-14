import React from 'react';

const Service = ({ service, setTreatment }) => {
    console.log(service)
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{
                    slots.length > 0 ? <span> {slots[0]}</span> : <span className='text-red-500'>
                        No Slot Availiable </span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div class="card-actions">
                    
                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0}for="booking-modal-6" class="btn btn-secondary uppercase">Book Appointment</label>
                    
                </div>
            </div>
        </div>

    );
};

export default Service;