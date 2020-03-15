import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../themes';

const primary = theme('mode', colourMaps.primary);
const tertiary = theme('mode', colourMaps.tertiary);

const StyledTitle = styled.h1`
  color: ${(tertiary || primary)};
`;

export default StyledTitle;
