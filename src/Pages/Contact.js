import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { ImLocation } from 'react-icons/im';

const Contact = () => {
    return (
        <div id='contact' className='container mx-auto  md:px-60 my-40 text-white '>
             <h1 className='text-center my-20 font-bold text-4xl font-serif text-primary'>CONTACT</h1>
            <div className="card  ">
                <div className="card-body">
                   
                
                    <div className="card-body  rounded shadow-2xl">
                        <div className='flex justify-between items-center rounded shadow-2xl'>
                            <div><SiGmail></SiGmail></div>
                            <div><h1>tanvirsohaniiuc@gmail.com</h1></div>
                        </div>
                        <div className='flex justify-between items-center rounded shadow-2xl'>
                            <div><AiFillPhone></AiFillPhone></div>
                            <div><h1>+8801837253351</h1></div>
                        </div>
                        <div className='flex justify-between items-center rounded shadow-2xl'>
                            <div><ImLocation></ImLocation></div>
                            <div><h1>Chittagong, Banglafesh</h1></div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;