import React from 'react';
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

const Projects = () => {
    return (
        <div className='container mx-auto  md:px-60 my-40 text-white'>
            <h1 className='text-center my-20 font-bold text-4xl'>PROJRCTS</h1>
            <div className='grid md:grid-cols-3 gap-40'>
                <div className="card w-96  shadow-xl image-full ">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Online Mobile Resale Market— React-project</h2>
                        <p>This website is Business website.</p>
                        <div className="card-actions justify-center">
                            <div className='mx-2 rounded-lg  btn-outline'><a href="https://github.com/tanvirIIUC/ctg-mobile-resale-market-client"><AiFillGithub className='text-2xl'></AiFillGithub></a>
                            </div>
                            <div className='mx-2 rounded-lg  btn-outline'><a href="https://ctg-mobile-resale-market.web.app/"><AiOutlineLink className='text-2xl'></AiOutlineLink></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="card w-96  shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Online food service— React-project</h2>
                        <p>This is a Service Website.It has some food items .</p>
                        <div className="card-actions justify-center">
                            <div className='mx-2 rounded-lg  btn-outline'><a href="https://github.com/tanvirIIUC/ctg-food-client"><AiFillGithub className='text-2xl'></AiFillGithub></a>
                            </div>
                            <div className='mx-2 rounded-lg  btn-outline'><a href="https://ctg-food.web.app/"><AiOutlineLink className='text-2xl'></AiOutlineLink></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96  shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Online-Learning Pi Academy — React- project</h2>
                        <p>This is a Learning Website . It has six Topics .</p>
                        <div className="card-actions justify-center">
                            <div className='mx-2 rounded-lg  btn-outline'><a href="https://github.com/tanvirIIUC/pi-acadamy-client"><AiFillGithub className='text-2xl'></AiFillGithub></a>
                            </div>
                            <div className='mx-2 rounded-lg  btn-outline'><a href="https://pi-acadamy.web.app/"><AiOutlineLink className='text-2xl'></AiOutlineLink></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;