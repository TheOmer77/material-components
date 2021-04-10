import React from 'react';

// Components
import { Typography } from '@rmwc/typography';
import { IconButton } from '@rmwc/icon-button';

const ComponentDisplay = ({ title = 'Title', docsLink, children }) => {
  return (
    <div className='component-display'>
      <h3 className='title'>
        <Typography use='headline6'>{title}</Typography>
        {docsLink && (
          <IconButton
            icon='open_in_new'
            aria-label='Docs'
            tag='a'
            target='_blank'
            href={docsLink}
          />
        )}
      </h3>
      {children}
    </div>
  );
};

export default ComponentDisplay;
