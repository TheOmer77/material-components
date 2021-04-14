import React from 'react';

// Components
import { Avatar, AvatarCount, AvatarGroup } from '@rmwc/avatar';

const AvatarDisplay = ({ data }) => {
  return (
    <>
      <div className='row'>
        {data.map((person) => (
          <Avatar
            key={person.name}
            name={person.name}
            src={person.img}
            size='large'
          />
        ))}
      </div>
      <div className='row'>
        {data.map((person) => (
          <Avatar key={person.name} name={person.name} size='large' />
        ))}
      </div>
      <div className='row'>
        <AvatarGroup dense>
          {data.map((person) => (
            <Avatar
              key={person.name}
              src={person.img}
              name={person.name}
              size='large'
              interactive
            />
          ))}
          <AvatarCount size='large' overflow value={3} interactive />
        </AvatarGroup>
      </div>
      <div className='row'>Images from This Person Does Not Exist.</div>
    </>
  );
};

export default AvatarDisplay;
