import React from 'react';
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

function Contacts() {
  
    return (
    
    <div className="contacts-container">
      <h3>Contact Me</h3>
      <div className="social-icons">
        <a href="https://www.instagram.com/xaquasanx/" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <FaInstagram />
          </div>
        </a>
        <a href="https://github.com/Aquasan" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <FaGithub />
          </div>
        </a>
        <a href="https://twitter.com/AquasanxAlex" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <FaTwitter />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contacts;
