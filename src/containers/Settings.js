import React from 'react';
import { connect } from 'react-redux';
import Flex1Container from '../shared/components/Layout/Flex1Container';
import ThemeSelector from '../components/Settings/ThemeSelector';
import { themes } from '../shared/themes';
import { setThemeMode, set12HourTime, setTimeFormat } from '../store/actions';
import PageTitle from '../shared/components/Layout/PageTitle';
import ClockSettings from '../components/Settings/ClockSettings';

function Settings({
  setTheme,
  themeMode,
  format,
  hour12,
  set12Hour,
  setClockFormat

}) {
  return (
    <Flex1Container justify="justify-start">
      <div>
        <ThemeSelector
          value={themeMode}
          onChange={(e) => setTheme(e.target.value)}
          themes={themes}
        />
      </div>
      <ClockSettings
        format={format}
        hour12={hour12}
        setFormat={setClockFormat}
        set12HourTime={set12Hour}
      />
    </Flex1Container>
  );
}

const mapStateToProps = (state) => ({
  themeMode: state.theme.mode,
  hour12: state.clock.hour12,
  format: state.clock.format
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (mode) => dispatch(setThemeMode(mode)),
  set12Hour: (hour12) => dispatch(set12HourTime(hour12)),
  setClockFormat: (format) => dispatch(setTimeFormat(format))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
