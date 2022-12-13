import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import HeroSection from './Pages/HeroSection';
import About from './Pages/About';
import Skils from './Pages/Skils';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <Skils></Skils>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
   
    </div>
  );
}

export default App;
