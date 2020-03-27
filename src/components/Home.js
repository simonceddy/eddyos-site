import React from 'react';
import Icons from './Icons';
import Flex1Container from '../shared/components/Layout/Flex1Container';
import Icon from '../shared/components/Icons/Icon';

function Home({ addApplet, icons = [] }) {
  return (
    <Flex1Container className="z-0 w-full h-full">
      <Icons>
        {icons.map((iconObject = {}, key) => (
          <Icon
            key={key}
            id={iconObject.id}
            Component={iconObject.Icon}
            label={iconObject.name}
            onClick={(iconObject.loader ? () => addApplet(iconObject.loader()) : () => null)}
          />
        ))}
      </Icons>
    </Flex1Container>
  );
}
export default Home;
