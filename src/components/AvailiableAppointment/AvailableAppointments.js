import format from 'date-fns/format';
import { useEffect, useState } from 'react';
import React from 'react';
import Service from './Service';
import BookingModal from './BookingModal/BookingModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery} from 'react-query'

const AvailableAppointments = ({ date }) => {
    const [user, loading] = useAuthState(auth);
    // const [services, setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);
   
    const formattedDate = format(date, 'PP');
    const {data:services,isLoading,refetch} = useQuery(['available',formattedDate],()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
   .then(res => res.json()))

    if(isLoading){
        return <loading></loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate])
    return (
        <div>
            <h4 className='text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} user={user} refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;