import React from 'react';
import Flex1Container from '../shared/components/Layout/Flex1Container';
import PageTitle from '../shared/components/Layout/PageTitle';
import ScrollableContent from '../shared/components/Layout/ScrollableContent';

function Contact() {
  return (
    <Flex1Container>
      <PageTitle>
        Contact Simon
      </PageTitle>
      <ScrollableContent>
        With either yo email or yo holla wallet.
      </ScrollableContent>
    </Flex1Container>
  );
}

export default Contact;
