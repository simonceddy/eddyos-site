import styled from 'styled-components';
import theme from 'styled-theming';
import { NavLink } from 'react-router-dom';
import { colourMaps } from '../themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);

const StyledLink = styled(NavLink)`
  :hover, :focus {
    color: ${primary};
    background: ${secondary};
    text-decoration: underline;
  }
`;

export default StyledLink;
