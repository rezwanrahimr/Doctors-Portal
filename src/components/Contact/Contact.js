import React from 'react';
import backgroundImage from '../../assets/images/appointment.png'
const Contact = () => {
    return (
        <div className='mt-20 pt-10 pb-10 ' style={{"backgroundImage":`url(${backgroundImage})`}}>
           <div className='text-center '>
               <small>Contact Us</small>
               <h1 className='text-secondary text-2xl'>Stay connected with us</h1>
           </div>
           
           <div className="rounded-md shadow-sm -space-y-px  justify-center">
              <div className='flex justify-center'>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block mt-5 w-72  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className='flex justify-center '>
                <label htmlFor="text" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="subject"
                  autoComplete="subject"
                  required
                  className="appearance-none rounded-none w-72 relative block my-3  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="subject"
                />
              </div>
              <textarea class="textarea textarea-bordered w-72" placeholder="Bio"></textarea>
            <div>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary mt-5">Submit</button>
            </div>
             
           </div>
        </div>
    );
};

export default Contact;