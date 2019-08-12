import React from 'react';
import {
  FaPhone as PhoneIcon,
  FaEnvelope as EmailIcon,
  FaGithub as GithubIcon
} from 'react-icons/fa';

function TaskbarIcons() {
  return (
    <div className="flex flex-row justify-around ml-2">
      <span className="m-2">
        <a href="tel:61402499551">
          <PhoneIcon size={30} />
        </a>
      </span>
      <span className="m-2">
        <a href="mailto:simon@simoneddy.com.au">
          <EmailIcon size={30} />
        </a>
      </span>
      <span className="m-2">
        <a href="https://github.com/simonceddy/">
          <GithubIcon size={30} />
        </a>
      </span>
    </div>
  );
}

export default TaskbarIcons;
