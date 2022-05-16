import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{
                    slots.length > 0 ? <span> {slots[0]}</span> : <span className='text-red-500'>
                        No Slot Availiable </span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions">

                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} htmlFor="booking-modal-6" className="btn btn-secondary uppercase">Book Appointment</label>

                </div>
            </div>
        </div>

    );
};

export default Service;