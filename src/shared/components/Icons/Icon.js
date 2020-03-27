import React from 'react';
import { connect } from 'react-redux';
import IconContainer from './IconContainer';
import IconText from './IconText';
import PrimaryButton from '../Styled/PrimaryButton';

function Icon({
  onClick,
  label,
  size,
  Component,
  id
}) {
  return (
    <PrimaryButton
      type="button"
      onClick={onClick}
      className="no-underline hover:underline m-1 flex flex-col justify-start items-center px-1"
      id={id}
    >
      <IconContainer width={size} height={size}>
        <Component size={size} title={label} />
      </IconContainer>
      <IconText>
        {label}
      </IconText>
    </PrimaryButton>
  );
}

const mapStateToProps = (state) => ({
  size: state.system.homeIconSize
});

export default connect(mapStateToProps)(Icon);
