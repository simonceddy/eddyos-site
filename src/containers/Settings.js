import React from 'react';
import { connect } from 'react-redux';
import Flex1Container from '../shared/components/Layout/Flex1Container';
import ThemeSelector from '../components/Settings/ThemeSelector';
import { themes } from '../shared/themes';
import { setThemeMode } from '../store/actions';
import PageTitle from '../shared/components/Layout/PageTitle';

function Settings({ setTheme, themeMode }) {
  return (
    <Flex1Container justify="justify-between">
      <PageTitle>Settings</PageTitle>
      <ThemeSelector value={themeMode} onChange={(e) => setTheme(e.target.value)} themes={themes} />
    </Flex1Container>
  );
}

const mapStateToProps = (state) => ({
  themeMode: state.theme.mode
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (mode) => dispatch(setThemeMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
