import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3,DiJavascript } from 'react-icons/di';
import { SiTailwindcss,SiFirebase,SiMongodb } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { FaReact,FaNodeJs } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io';

const Skils = () => {
    return (
        <div id='skils' className='container mx-auto  md:px-60 my-40 text-white'>
            <h1 className='text-center my-20 font-bold text-4xl text-primary font-serif'>SKILS</h1>
        <div className='grid md:grid-cols-5 sm:grid-cols-2 gap-10 justify-items-center'>
            <div ><AiFillHtml5 className='rounded-lg  btn-outline text-5xl'></AiFillHtml5></div>
            <div><DiCss3 className='rounded-lg  btn-outline text-5xl'></DiCss3></div>
            <div><SiTailwindcss className='rounded-lg  btn-outline text-5xl'></SiTailwindcss></div>
            <div><BsFillBootstrapFill className='rounded-lg  btn-outline text-5xl'></BsFillBootstrapFill></div>
            <div><DiJavascript className='rounded-lg  btn-outline text-5xl'></DiJavascript></div>
            <div><FaReact className='rounded-lg  btn-outline text-5xl'></FaReact></div>
            <div><FaNodeJs className='rounded-lg  btn-outline text-5xl'></FaNodeJs></div>
            <div><SiFirebase className='rounded-lg  btn-outline text-5xl'></SiFirebase></div>
            <div><SiMongodb className='rounded-lg  btn-outline text-5xl'></SiMongodb></div>
            
            
        </div>
        </div>
    );
};

export default Skils;