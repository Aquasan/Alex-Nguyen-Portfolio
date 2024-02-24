import React from 'react';
import '../../App.css';
import myImage from '../../images/my-image.jpg';

function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '20px' }}>
   
    <img src={myImage} alt="My Image" style={{ width: '718px', border: '2px solid #000', borderRadius: '10px' }} />
   
    <div style={{ marginLeft: '20px', marginTop:'-100px' }}>
   
        <h2>About Me</h2>
   
        <p style={{ fontSize: '1.2em' }}>
   
          Hello, my name is Alex Nguyen, born and raised in California. I am curently studying in Computer Science at the California State University Fullerton.
        I am familiar with several programming languages, including C#, C++, Python, a bit of HTML, and have some exposure to JavaScript. My hobbies in the freetime are playing videogames and cooking.          
        My life goals is to pursue a career in Game Designer. The reason for this is because from my childhood experiences, playing video games was my passion and I aim to engage in a profession this that would eventually
        brings me joy and fulfillment.        
   
        </p>
   
      </div>
   
    </div>
  );
}

export default Home;
