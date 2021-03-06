import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../src-draft-3/shared/themes';

const primaryB = theme('mode', colourMaps.primaryB);

/* function loadGlobalStyles(mode) {
  const {
    primary,
    primaryA,
    primaryB,
    primaryC,
    secondary,
    menuButton
  } = getTheme(mode || 'pleasantSunshine');

  const ThemeStyles = createGlobalStyle`
    body {
      background-color: ${secondary};
      color: ${primary};
    }

    .bg-theme-primary {
      background-color: ${primary};
    }

    .bg-theme-primary-a {
      background-color: ${primaryA};
    }

    .bg-theme-primary-b {
      background-color: ${primaryB};
    }

    .bg-theme-secondary {
      background-color: ${secondary};
    }

    .text-theme-primary {
      color: ${primary};
    }

    .text-theme-primary-a {
      color: ${primaryA};
    }

    .text-theme-primary-b {
      color: ${primaryB};
    }

    .text-theme-primary-c {
      color: ${primaryC};
    }

    .text-theme-secondary {
      color: ${secondary};
    }

    .border-theme-primary {
      border-color: ${primary};
    }

    .border-theme-primary-a {
      border-color: ${primaryA};
    }

    .border-theme-primary-b {
      border-color: ${primaryB};
    }

    .border-theme-primary-c {
      border-color: ${primaryC};
    }

    .border-theme-secondary {
      border-color: ${secondary};
    }

    .os-menu-button {
      border-color: ${(menuButton || secondary)};
      background-color: ${primaryB};
      color: ${(menuButton || secondary)};
    }

    .os-menu-button:hover {
      border-color: ${primary};
      background-color: ${secondary};
      color: ${primary};
    }
  `;

  return ThemeStyles;
} */

const OsWrapper = styled.div`
  border-color: ${primaryB};
`;

function OsStylesWrapper({ children }) {
  return (
    <OsWrapper className="flex flex-1 flex-col justify-between m-1 border">
      {children}
    </OsWrapper>
  );
}

export default OsStylesWrapper;
