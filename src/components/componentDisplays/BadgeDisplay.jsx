import { Avatar } from '@rmwc/avatar';
import { Badge, BadgeAnchor } from '@rmwc/badge';
import { Button } from '@rmwc/button';
import { IconButton } from '@rmwc/icon-button';
import React from 'react';

const BadgeDisplay = () => {
  return (
    <>
      <div className='row'>
        <Badge align='inline' />
        <Badge align='inline' label={20} />
        <Badge align='inline' label='New' />
      </div>
      <div className='row'>
        <BadgeAnchor>
          <Button raised label='Button' />
          <Badge />
        </BadgeAnchor>
        <BadgeAnchor>
          <IconButton icon='notifications' />
          <Badge inset='0.75rem' />
        </BadgeAnchor>
        <BadgeAnchor>
          <Avatar src='/avatars/person1.jpg' size='large' />
          <Badge inset='0.25rem' />
        </BadgeAnchor>
      </div>
    </>
  );
};

export default BadgeDisplay;
