import React from 'react';
import Text from '../Text';
import article from '../../storage/content/article';

function Contact() {
  return (
    <Text title="Contact Simon">
      Brief contact details

      <div>
        {article}
      </div>
    </Text>
  );
}

export default Contact;
