import { format } from 'date-fns';
import React from 'react';
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, date,setTreatment,user }) => {
    const {_id,name,slots} = treatment;
    console.log(user)
   const formatedDate = format(date, 'PP');
    // create a handlear
    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot)
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient:user.email,
            patientName:user.displayName,
            phone:event.target.phone.value

        }
        console.log(booking)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
               console.log(data)
               toast('Appointment Successfuly')
                setTreatment(null);
            });
    }

    return (
        <div>

            <label htmlFor="booking-modal-6" className="btn modal-button">open modal</label>
            <input type="checkbox" id="booking-modal-6" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input disabled type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                           
                        </select>
                        <input type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BookingModal;