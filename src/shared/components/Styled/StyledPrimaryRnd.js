import styled from 'styled-components';
import theme from 'styled-theming';
import { Rnd } from 'react-rnd';
import { colourMaps } from '../../themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);

const StyledPrimaryRnd = styled(Rnd)`
  color: ${primary};
  border-color: ${primary};
  background-color: ${secondary};
`;

export default StyledPrimaryRnd;
