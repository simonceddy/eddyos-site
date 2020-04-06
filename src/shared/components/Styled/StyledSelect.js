import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);
const tertiary = theme('mode', colourMaps.tertiary);

const StyledSelect = styled.select`
  color: ${(tertiary || primary)};
  border-color: ${primary};
  background-color: ${secondary};
`;

export default StyledSelect;
