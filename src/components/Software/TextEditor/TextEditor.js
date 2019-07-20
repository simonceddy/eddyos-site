import React, { useState } from 'react';
import { connect } from 'react-redux';
import SoftwareWindow from '../../../shared/components/SoftwareWindow/SoftwareWindow';
import { getArticle } from '../../../os/reduxOs/selectors/textSelectors';
import SoftwareWrapper from '../../../shared/components/SoftwareWrapper';
import { setPos, setSize } from '../../../os/reduxOs/actions/textActionCreators';
import SoftwareWindowTitle from '../../../shared/components/SoftwareWindow/SoftwareWindowTitle';
import SoftwareWindowContent from '../../../shared/components/SoftwareWindow/SoftwareWindowContent';
import EditBox from './EditBox';

function TextEditor({
  editable = false,
  articleKey,
  article = {},
  width,
  height,
  x,
  y
}) {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    if (editable) {
      setEditMode(!editMode);
    }
  };

  return (
    <SoftwareWrapper
      pos={{ x, y }}
      setPos={setPos}
      size={{ height, width }}
      setSize={setSize}
    >
      <SoftwareWindow title={article.title} articleKey={articleKey}>
        <SoftwareWindowTitle>{article.title}</SoftwareWindowTitle>
        {editMode
          ? (
            <EditBox toggleEditMode={toggleEditMode} val={article.body} />
          )
          : (
            <SoftwareWindowContent handler={toggleEditMode}>
              {article.body}
            </SoftwareWindowContent>
          )
        }
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleArticleChange: () => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
