import styled from 'styled-components';
import theme from 'styled-theming';
import { NavLink } from 'react-router-dom';
import { colourMaps } from '../../themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);
const tertiary = theme('mode', colourMaps.tertiary);

const StyledTaskBarLink = styled(NavLink)`
  background-color: ${primary};
  color: ${secondary};
  border-color: ${secondary}

  &:hover {
    background-color: ${secondary};
    color: ${tertiary};
  }
`;

export default StyledTaskBarLink;
