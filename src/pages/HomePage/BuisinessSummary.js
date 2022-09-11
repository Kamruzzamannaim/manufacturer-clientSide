import React from 'react';
import Countries from '../../Assets/countries.png';
import Feedback from '../../Assets/feedback.png';
import HappyClients from '../../Assets/happyClients.png';
import Revenue from '../../Assets/revenue.png';
const BuisinessSummary = () => {
    return (
        <div className='my-10'>
           <div>
            <h2 className='text-2xl font-bold text-center'>We are growing now</h2>
        </div>
        <div className='flex justify-center  my-10'>
            <div className='flex flex-col justify-center text-center w-1/5 px-5 mx-2'>
               <figure className='w-20 mx-auto'> <img   src={Countries} alt="" /></figure>
                <p className='text-2xl font-bold mt-1'>27</p>
                <p className='text-secondary'>countries</p>
            </div>
            <div className='flex flex-col justify-center text-center w-1/5 px-5 mx-2'>
                <figure className='w-20 mx-auto'><img src={Revenue} alt="" /></figure>
                <p className='text-2xl font-bold  mt-1'>1 Millon</p>
                <p className='text-secondary'>Revenue</p>
            </div>
            <div className='flex flex-col justify-center text-center w-1/5 px-5 mx-2'>
               <figure className='w-20 mx-auto'> <img src={Feedback} alt="" /></figure>
                <p className='text-2xl font-bold  mt-1'>500+</p>
                <p className='text-secondary'>Feedback</p>
            </div>
            <div className='flex flex-col justify-center text-center w-1/5 px-5 mx-2'>
                <figure className='w-20 mx-auto'><img src={HappyClients} alt="" /></figure>
                <p className='text-2xl font-bold  mt-1'>1000+</p>
                <p className='text-secondary'>Happy Clients</p>
            </div>
        </div>
        </div>
    );
};

export default BuisinessSummary;