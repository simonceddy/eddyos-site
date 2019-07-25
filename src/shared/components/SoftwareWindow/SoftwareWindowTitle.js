import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';
import theme from 'styled-theming';
import ExitButton from '../ExitButton/ExitButton';
import { darkPrimaryColourMap, secondaryColourMap } from '../../themes';

const darkPrimary = theme('mode', darkPrimaryColourMap);
const secondary = theme('mode', secondaryColourMap);

const StyledSoftwareWindowTitle = style.div`
  background-color: ${darkPrimary};
  color: ${secondary};
`;


function SoftwareWindowTitle({ children, noClose = false }) {
  return (
    <StyledSoftwareWindowTitle className="drag-handle text-2xl flex flex-row justify-between items-center p-1 bg-green-dark cursor-move">
      <div className="flex-1">{children}</div>
      {
        noClose === true
          ? null
          : (
            <div className="items-center flex flex-row m-1">
              <Link to="/"><ExitButton /></Link>
            </div>
          )
      }
    </StyledSoftwareWindowTitle>
  );
}

export default SoftwareWindowTitle;
