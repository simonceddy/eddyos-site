import React from 'react';
import {
  FaPhone as PhoneIcon,
  FaEnvelope as EmailIcon,
  FaGithub as GithubIcon
} from 'react-icons/fa';

function MenuIcons() {
  return (
    <div className="flex flex-row justify-around ml-2">
      <span className="m-2"><PhoneIcon size={40} /></span>
      <span className="m-2">
        <a href="mailto:simon@simoneddy.com.au">
          <EmailIcon size={40} />
        </a>
      </span>
      <span className="m-2">
        <a href="https://github.com/simonceddy/"><GithubIcon size={40} /></a>
      </span>
    </div>
  );
}

export default MenuIcons;
