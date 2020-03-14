import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);

const StyledInvertedDiv = styled.div`
  color: ${secondary};
  border-color: ${secondary};
  background-color: ${primary};
`;

export default StyledInvertedDiv;
