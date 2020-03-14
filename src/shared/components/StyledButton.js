import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../themes';

const primary = theme('mode', colourMaps.primary);
const tertiary = theme('mode', colourMaps.tertiary);
const secondary = theme('mode', colourMaps.secondary);

const StyledButton = styled.button`
  border-color: ${secondary};
  background-color: ${tertiary};
  color: ${secondary};

  :hover, :focus {
    border-color: ${primary};
    background-color: ${secondary};
    color: ${primary};
  }

  :active {
    border-color: ${secondary};
    background-color: ${primary};
    color: ${secondary};
  }
`;

export default StyledButton;
