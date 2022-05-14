import format from 'date-fns/format';
import { useEffect, useState } from 'react';
import React from 'react';
import Service from './Service';
import BookingModal from './BookingModal/BookingModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);
    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h4 className='text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;