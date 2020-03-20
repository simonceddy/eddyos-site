import React from 'react';
import { connect } from 'react-redux';
import TaskBar from '../shared/components/Layout/TaskBar';
import LeftSection from '../components/TopBar/LeftSection';
import EddyOSButton from '../components/TopBar/EddyOSButton';
import SecondaryButton from '../shared/components/Styled/SecondaryButton';
import { setAppletTop } from '../store/actions/appletActions';

function TopBar({ children, applets, setTop }) {
  return (
    <TaskBar className="border-b-2">
      <LeftSection>
        <EddyOSButton />
        <div className="flex flex-row justify-start items-center">
          {applets.map((applet, key) => {
            const { Icon, name } = applet;
            return (
              <SecondaryButton key={key} onClick={() => setTop(applet)}>
                <Icon title={name} size="1.7rem" />
              </SecondaryButton>
            );
          })}
        </div>
      </LeftSection>
      {children}
    </TaskBar>
  );
}

const mapStateToProps = (state) => ({ applets: state.applets.active });

const mapDispatchToProps = (dispatch) => ({
  setTop: (applet) => dispatch(setAppletTop(applet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
