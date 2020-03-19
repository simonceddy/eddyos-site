import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);
const tertiary = theme('mode', colourMaps.tertiary);

const SecondaryButton = styled.button`
  background-color: ${primary};
  color: ${secondary};
  border-color: ${secondary};

  &:hover {
    background-color: ${secondary};
    color: ${primary};
    border-color: ${primary};
  }

  &:active {
    color: ${tertiary};
    background-color: ${secondary};
    border-color: ${tertiary};
  }
`;

export default SecondaryButton;
