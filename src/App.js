import React from 'react';
import ProfileImage from './Component/ProfileImage/ProfileImage';
import Link from './Component/Link/Link';
import './App.css';
import Particles from "react-particles-js";


function App() {
  return (
    
    
    <div>
       <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 5
	        }
	    }
	}} />
      <div className='inner-box'>
      <ProfileImage />
      <h3>Ahmed Maqbool</h3>
      <h3>Software Engineer</h3>
      <Link/>
      </div>
      </div>
      
    
  
  );
}

export default App;
