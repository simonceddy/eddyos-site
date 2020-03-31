import React from 'react';
import Icons from './Icons';
import Flex1Container from '../shared/components/Layout/Flex1Container';
import Icon from '../shared/components/Icons/Icon';
import { createApplet } from '../shared/applets';
import ErrorBoundary from '../shared/components/ErrorBoundary';

function Home({ addApplet, icons = [] }) {
  return (
    <ErrorBoundary>
      <Flex1Container className="z-0 w-full h-full">
        <Icons>
          {icons.map((iconObject = {}, key) => (
            <Icon
              key={key}
              id={`${iconObject.id}Icon`}
              Component={iconObject.Icon}
              label={iconObject.name}
              onClick={(iconObject.id ? () => addApplet(createApplet(iconObject.id)) : () => null)}
            />
          ))}
        </Icons>
      </Flex1Container>
    </ErrorBoundary>
  );
}
export default Home;
