import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FaLinkedin  onClick={()=> window.open("https://www.linkedin.com/in/devansh-trivedi-a937851b0/", "_blank")}/>
    </div>

    <div>
      <FaGithub  onClick={()=> window.open("https://github.com/Devansh-Trivedi/", "_blank")}/>
    </div>

    <div>
      <BsTwitter onClick={()=> window.open("https://twitter.com/devanshtrivedii", "_blank")} />
    </div>
    
    <div>
      <BsInstagram onClick={()=> window.open("https://www.instagram.com/devanshtrivedii/", "_blank")}  />
    </div>
  </div>
);

export default SocialMedia;
