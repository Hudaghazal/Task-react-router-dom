import { Routes, Route } from "react-router-dom";
import Nav from './component/Nav/Nav'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import More from './component/More/More'

import './App.css';

function App() {
  return (
    <>
     <div className="app">
      
     <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
      </Routes> 

    </div>

     
   </>


  );
  
}

  export default App ;
 
