import React from 'react';
import { connect } from 'react-redux';
import SoftwareWindow from '../../../shared/components/SoftwareWindow/SoftwareWindow';
import { getArticle } from '../../../os/selectors/textSelectors';
import SoftwareWrapper from '../../../shared/components/SoftwareWrapper';
import { setPos, setSize } from '../../../os/actions/textActionCreators';
import SoftwareWindowTitle from '../../../shared/components/SoftwareWindow/SoftwareWindowTitle';
import ConEddy from './ConEddy';

function ConWrapper({
  width,
  height,
  x,
  y,
  os
}) {
  return (
    <SoftwareWrapper
      pos={{ x, y }}
      setPos={setPos}
      size={{ height, width }}
      setSize={setSize}
    >
      <SoftwareWindow>
        <SoftwareWindowTitle>conEddy v0.0.1</SoftwareWindowTitle>
        <ConEddy os={os} />
      </SoftwareWindow>
    </SoftwareWrapper>
  );
}

const mapStateToProps = (state, ownProps) => ({
  article: getArticle(state, ownProps.articleKey),
  width: state.windows.text.width,
  height: state.windows.text.height,
  x: state.windows.text.x,
  y: state.windows.text.y,
});

export default connect(mapStateToProps)(ConWrapper);
