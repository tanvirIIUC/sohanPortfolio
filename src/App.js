import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import HeroSection from './Pages/HeroSection';
import About from './Pages/About';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
   
    </div>
  );
}

export default App;
