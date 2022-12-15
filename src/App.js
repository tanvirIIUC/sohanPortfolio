import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import HeroSection from './Pages/HeroSection';
import About from './Pages/About';
import Skils from './Pages/Skils';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Routes';


function App() {
  
  return (
    <div className="">
  
  <RouterProvider router={routes}></RouterProvider>
      


     
      
    </div>
  );
}

export default App;
