import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Projects from './Projects';
import Skils from './Skils';

const Home = () => {
    return (
        <div>
            
      <HeroSection></HeroSection>
      <About></About>
      <Skils></Skils>
      <Projects></Projects>
      <Contact></Contact>
      
        </div>
    );
};

export default Home;