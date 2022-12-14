import React from 'react';
import aboutPic from '../Assets/about.jpg'
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";

const About = () => {
    return (
        <div id='about' className='grid sm:grid-cols-1 md:grid-cols-2 my-52 container mx-auto md:px-60'>
            <div className='flex justify-center text-white'>
                <div>
                    <img className='w-80 rounded-3xl' src={aboutPic} alt="" />
                    <div className='flex justify-center mt-5'>
                        <div className='mx-2 rounded-lg  btn-outline'><a href="https://www.facebook.com/tanvirhasan.sohan.58?mibextid=ZbWKwL"><BsFacebook className='text-2xl'></BsFacebook></a></div>
                        <div className='mx-2 rounded-lg btn-outline'><a href="https://www.linkedin.com/in/tanvir-hasan-sohan-610800237/"><AiFillLinkedin className='text-2xl'></AiFillLinkedin></a></div>
                        <div className='mx-2 rounded-lg btn-outline'><a href="https://github.com/tanvirIIUC"><AiFillGithub className='text-2xl'></AiFillGithub></a></div>
                        
                         
                    </div>
                </div>


            </div>
            <div className='grid grid-cols-1 content-center  text-white sm:pt-5 '>
                <p className=''>I am junior web developer. I can do simple website implement by using Html, Css, Bootstrap, Tailwind and so on. I did some website by using this. I also have basic idea about C Programing, C++, Javascript, Php(basic). I can make responsibe website. I also Know about database(mysql).

                </p>
                <div className='mt-5 btn btn-outline w-20'>
                    <a href="https://drive.google.com/file/d/1MU3ban80YH6gDv9ZwtvcF3vQU-bZAW_0/view?usp=share_link">Resume</a>
                </div>
            </div>

        </div>
    );
};

export default About;