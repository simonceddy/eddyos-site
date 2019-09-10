import React from 'react';
import {
  FaPhone as PhoneIcon,
  FaEnvelope as EmailIcon,
  FaGithub as GithubIcon
} from 'react-icons/fa';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../shared/themes';

const primary = theme('mode', colourMaps.primary);
const primaryA = theme('mode', colourMaps.primaryA);
const secondary = theme('mode', colourMaps.secondary);

const StyledIcon = styled.a`
  color: ${(primary)};

  :hover, :focus {
    color: ${secondary};
  }

  :active {
    color: ${primaryA};
  }
`;

function Icons() {
  return (
    <div className="flex flex-row justify-around ml-2">
      <span className="m-2">
        <StyledIcon href="tel:61402499551">
          <PhoneIcon size={30} />
        </StyledIcon>
      </span>
      <span className="m-2">
        <StyledIcon href="mailto:simon@simoneddy.com.au">
          <EmailIcon size={30} />
        </StyledIcon>
      </span>
      <span className="m-2">
        <StyledIcon href="https://github.com/simonceddy/">
          <GithubIcon size={30} />
        </StyledIcon>
      </span>
    </div>
  );
}

export default Icons;
