import React, { useEffect, useState } from 'react';
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from 'react-router-dom';


const Projects = () => {
    const [topic, setTopic] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
             .then(data => setTopic(data))
            
    }, [])
    return (
        <div id='projects' className='container mx-auto  md:px-60 my-40 text-white'>
            <h1 className='text-center my-20 font-bold text-4xl text-primary font-serif'>PROJRCTS</h1>
            <div className='grid md:grid-cols-3 gap-40'>
                {
                    topic?.map(top =>
                        <div className="card w-96  shadow-xl image-full ">
                            <figure><img src={top.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{top.name}</h2>
                                <p> ##
                                    {top.detail1}
                                </p>


                                <div className="card-actions justify-center">
                                    <div className='mx-2 rounded-lg  btn-outline'><a href={top.git_client_side}><AiFillGithub className='text-2xl'></AiFillGithub></a>
                                    </div>
                                    <div className='mx-2 rounded-lg  btn-outline'><a href={top.live_link}><AiOutlineLink className='text-2xl'></AiOutlineLink></a>
                                    </div>
                                    <div className='mx-2 rounded-lg  btn-outline'><Link to={`/details/${top.id}`} >
                                    <CgDetailsMore className='text-2xl'></CgDetailsMore>
                                    </Link>
                                    </div>

                                </div>
                            </div>
                        </div>)
                }



            </div>

        </div>
    );
};

export default Projects;