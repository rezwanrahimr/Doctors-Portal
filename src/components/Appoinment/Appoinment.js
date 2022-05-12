import React from 'react';
import img from '../../assets/images/doctor.png';
import background from '../../assets/images/appointment.png';
const Appoinment = () => {
    return (
       <section className=' mt-20 ' style={{backgroundImage: `url(${background})`}}>
           <div className='mx-12 flex items-center justify-center'>
           <div className='flex-1'>
            <img className='mt-[-100px]' src={img} alt="" />
           </div>
           <div className='flex-1 text-white'>
               <small className='text-primary'>Appointment</small>
               <h1 className=''>Make an appointment Today</h1>
               <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit minus harum officia voluptas ad quis nisi reiciendis rem earum.ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit minus harum officia voluptas ad quis nisi reiciendis rem  </small>
           </div>
           </div>
       </section>
    );
};

export default Appoinment;