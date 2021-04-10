import React from 'react';

// Components
import { Avatar, AvatarCount, AvatarGroup } from '@rmwc/avatar';

const AvatarDisplay = ({ data }) => {
  return (
    <>
      <div className='row'>
        {data.map((item) => (
          <Avatar name={item.name} src={item.img} size='large' />
        ))}
      </div>
      <div className='row'>
        {data.map((item) => (
          <Avatar name={item.name} size='large' />
        ))}
      </div>
      <div className='row'>
        <AvatarGroup dense>
          {data.map((item) => (
            <Avatar src={item.img} name={item.name} size='large' interactive />
          ))}
          <AvatarCount size='large' overflow value={3} interactive />
        </AvatarGroup>
      </div>
      <div className='row'>Images from This Person Does Not Exist.</div>
    </>
  );
};

export default AvatarDisplay;
