import React, { useEffect } from 'react';

const Navbar = () => {
    let head_container;
    useEffect(() => {
      head_container = document.querySelector(".head_container");
    }, []);
    return (
        <div className="navbar bg-base-100 container mx-auto  md:px-60 ">
            <div className="navbar-start head_container">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a
                                href="#home"
                                onClick={() => head_container.classList.toggle("active")}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                        <a
                                href="#about"
                                onClick={() => head_container.classList.toggle("active")}
                            >
                                About
                            </a>
                        </li>
                        <li>
                        <a
                                href="#skils"
                                onClick={() => head_container.classList.toggle("active")}
                            >
                                Skils
                            </a>
                        </li>
                        <li>
                        <a
                                href="#projects"
                                onClick={() => head_container.classList.toggle("active")}
                            >
                                projects
                            </a>
                        </li>
                        <li>
                        <a
                                href="#contact"
                                onClick={() => head_container.classList.toggle("active")}
                            >
                                Contact
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            {/* <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div> */}
            <div className="navbar-end">

                <h1 className='font-serif text-2xl font-bold text-primary'>SOHAN</h1>
            </div>
        </div>
    );
};

export default Navbar;