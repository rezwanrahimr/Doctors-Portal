import React from 'react';
import itemOne from '../../assets/images/fluoride.png'
const Service = () => {
    return (
        <div className='mx-12'>
            <h1 className='text-primary font-bold mt-10'>OUR SERVICE</h1>
            <h1 className='text-2xl'>Services We Provide</h1>
            <div className='flex mt-10'>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl ">
                        <div class="card-body">

                            <div className='flex justify-center mb-3'>
                                <img className='w-20' src={itemOne} alt="" />
                            </div>
                            <div>
                                <h1>Fluoride Treatment</h1>
                                <small>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</small>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl mx-4">
                        <div class="card-body">

                            <div className='flex justify-center mb-3'>
                                <img className='w-20' src={itemOne} alt="" />
                            </div>
                            <div>
                                <h1>Fluoride Treatment</h1>
                                <small>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</small>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl ">
                        <div class="card-body">

                            <div className='flex justify-center mb-3'>
                                <img className='w-20' src={itemOne} alt="" />
                            </div>
                            <div>
                                <h1>Fluoride Treatment</h1>
                                <small>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;