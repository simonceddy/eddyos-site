import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Os from './Os';

function Root({ themeMode }) {
  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <Os />
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  themeMode: state.theme.mode
});

export default connect(mapStateToProps)(Root);
