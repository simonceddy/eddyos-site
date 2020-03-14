import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import IconContainer from '../components/Icons/IconContainer';
import IconText from '../components/Icons/IconText';

function IconWrapper({
  Icon,
  label,
  size,
  to = '/',
  exact = true
}) {
  return (
    <NavLink to={to} exact={exact}>
      <IconContainer>
        <Icon size={size} title={label} />
        <IconText>{label}</IconText>
      </IconContainer>
    </NavLink>
  );
}

const mapStateToProps = (state) => ({
  size: state.system.homeIconSize
});

export default connect(mapStateToProps)(IconWrapper);
