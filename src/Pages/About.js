import React from 'react';
import aboutPic from '../Assets/about.jpg'

const About = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 my-52 container mx-auto'>
            <div className='flex justify-center'>
                <div>
                <img className='w-96' src={aboutPic} alt="" />
                <div>
                    
                </div>
                </div>
               

            </div>
            <div className='flex items-center'>
                 <p>I am junior web developer. I can do simple website implement by using Html, Css, Bootstrap, Tailwind and so on. I did some website by using this. I also have basic idea about C Programing, C++, Javascript, Php(basic). I can make responsibe website. I also Know about database(mysql).</p>
            </div>
            
        </div>
    );
};

export default About;