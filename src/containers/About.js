import React from 'react';
import Flex1Container from '../shared/components/Layout/Flex1Container';
import PageTitle from '../shared/components/Layout/PageTitle';
import ScrollableContent from '../shared/components/Layout/ScrollableContent';

function About() {
  return (
    <Flex1Container>
      <PageTitle>
        About Simon
      </PageTitle>
      <ScrollableContent>
        Some text about me and also I.
      </ScrollableContent>
    </Flex1Container>
  );
}

export default About;
