import React, { useEffect, useState } from 'react';
import { AiFillCaretRight, AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { useLoaderData, useParams } from 'react-router-dom';

const TopicDetails = () => {
    const { id } = useParams();
    const topic = useLoaderData();
    console.log(topic)
    // const [topic, setTopic] = useState([])

    /* useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
             .then(data => setTopic(data))
            
    }, [topic[0]]) */

    const itemDetail = topic?.filter((td) => td?.id === id);
    return (
        <div className='container mx-auto  md:px-60 my-10 text-white'>
            <h2 className="py-4 text-3xl font-bold text-primary">Project Name: {itemDetail[0]?.name}</h2>

            <li>{itemDetail[0]?.detail1}</li>
            <li>{itemDetail[0]?.detail2}</li>
            <li>{itemDetail[0]?.detail3}</li>
            <h2 className="py-4 text-xl font-bold text-primary">Technology: {itemDetail[0]?.tech}</h2>
            <div className='flex'>
                <a href={itemDetail[0]?.git_client_side}><AiFillGithub className='text-2xl mx-2 rounded-lg  btn-outline'></AiFillGithub></a>
                <a href={itemDetail[0]?.live_link}><AiOutlineLink className='text-2xl mx-2 rounded-lg  btn-outline'></AiOutlineLink></a>
            </div>
           <div className='my-5'>
            <h1 className='my-5 text-xl font-bold text-primary'>{itemDetail[0]?.image_name}</h1>
            <img src={itemDetail[0]?.image} alt="" />
           </div>
           <div className='my-5'>
            <h1 className='my-5 text-xl font-bold text-primary'>{itemDetail[0]?.image1_name}</h1>
            <img src={itemDetail[0]?.image1} alt="" />
           </div>
           <div className='my-5'>
            <h1 className='my-5 text-xl font-bold text-primary'>{itemDetail[0]?.image2_name}</h1>
            <img src={itemDetail[0]?.image2} alt="" />
           </div>
           <div className='my-5'>
            <h1 className='my-5 text-xl font-bold text-primary'>{itemDetail[0]?.image3_name}</h1>
            <img src={itemDetail[0]?.image3} alt="" />
           </div>

        </div>
    );
};

export default TopicDetails;