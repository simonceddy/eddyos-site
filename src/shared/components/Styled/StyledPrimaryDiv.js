import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);

const StyledPrimaryDiv = styled.div`
  color: ${primary};
  border-color: ${primary};
  background-color: ${secondary};
`;

export default StyledPrimaryDiv;
