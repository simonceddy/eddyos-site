import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);
const tertiary = theme('mode', colourMaps.tertiary);

const PrimaryButton = styled.button`
  background-color: ${secondary};
  color: ${primary};
  border-color: ${primary};

  :hover, :focus {
    background-color: ${primary};
    color: ${secondary};
    border-color: ${secondary};
  }

  :active {
    color: ${secondary};
    background-color: ${tertiary};
    border-color: ${secondary};
  }
`;

export default PrimaryButton;
