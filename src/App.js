import { Routes, Route ,Link} from "react-router-dom";
import{Home ,About,Contact,More} from "../src/component/index";
import './App.css';

function App() {
  return (
    <>
     <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
    <nav className="nav">
      <ul className="items">
       <li><Link to="/">Home</Link></li> 
       <li><Link to="/about">About</Link></li> 
       <li><Link to="/contact">Contact</Link></li> 
       <li><Link to="/more">More</Link></li> 
        </ul>
      </nav>
      <h2>Welcome to the Home page!</h2>

     
   </>
   

  );
  
}

  export default App ;
 
