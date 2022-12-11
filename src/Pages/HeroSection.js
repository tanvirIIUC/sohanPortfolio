import React from 'react';
// import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import sohanPic from "../Assets/sohan.jpg"

const HeroSection = () => {
    return (

        <div className="container mx-auto my-28">
            <div className="main">
                <div className="header">
                    
                    <div className="hero-container">
                        <div className="row-1 full-screen grid md:grid-cols-2 sm:grid-cols-1 ">
                            <div className="">

                                <div className="text-center mt-16 ">
                                    <div className=''>
                                        <h1 className=" font-bold text-5xl my-2">Tanvir Hasan Sohan</h1>
                                        <h1 className='font-bold text-4xl my-2'>Have skills of </h1>
                                        <h1 className="font-bold text-4xl my-2">
                                            <Typewriter
                                                options={{
                                                    autoStart: true,
                                                    loop: true,
                                                    delay: 90,
                                                    strings: [
                                                        "JavaScript",
                                                        "React.js",
                                                        "HTML",
                                                        "CSS",
                                                        "C (BASIC)",
                                                        "C++",

                                                        "MongoDB",
                                                        "MySQL",
                                                    ],
                                                }}
                                            ></Typewriter>
                                        </h1>
                                        <div className='mt-5 btn btn-outline'>
                                            <a href="https://drive.google.com/file/d/1MU3ban80YH6gDv9ZwtvcF3vQU-bZAW_0/view?usp=share_link">Resume</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="home-img mx-auto">
                                <div className="img-box inner-shadow ">
                                    <img
                                        className="outer-shadow rounded-full w-96"
                                        src={sohanPic}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default HeroSection;