/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import asyncComponent from '../util/asyncComponent';
import TextWidget from './TextWidget';
import SettingsWidget from './SettingsWidget';

const AsyncCliWidget = asyncComponent(() => import('./CliWidget'));

function Widgets({ active }) {
  console.log(active);
  return (
    <>
      {active.cli ? (<AsyncCliWidget />) : null}
      {active.text ? (<TextWidget />) : null}
      {active.settings ? (<SettingsWidget />) : null}
    </>
  );
}

const mapStateToProps = (state) => ({
  active: state.activeWidgets
});

export default connect(mapStateToProps)(Widgets);
