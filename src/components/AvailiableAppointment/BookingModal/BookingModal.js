import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date,setTreatment }) => {
    console.log(treatment)
    // create a handlear
    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot)
        setTreatment('');
    }

    return (
        <div>

            <label for="my-modal-6" class="btn modal-button">open modal</label>
            <input type="checkbox" id="booking-modal-6" class="modal-toggle" />

            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{treatment.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input disabled type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                treatment.slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                           
                        </select>
                        <input type="text" placeholder="your name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="booking-modal-6" class="btn">Yay!</label>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BookingModal;