import React from 'react';

// Components
import { Typography } from '@rmwc/typography';
import { IconButton } from '@rmwc/icon-button';

const ComponentDisplay = ({ title = 'Title', docsLink, children }) => {
  return (
    <div className='component-display'>
      <Typography use='overline' className='title'>
        <span>{title}</span>
        {docsLink && (
          <IconButton
            icon='open_in_new'
            aria-label='Docs'
            tag='a'
            target='_blank'
            href={docsLink}
          />
        )}
      </Typography>
      {children}
    </div>
  );
};

export default ComponentDisplay;
