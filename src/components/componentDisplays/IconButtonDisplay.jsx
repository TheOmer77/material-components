import React from 'react';

// Components
import { IconButton } from '@rmwc/icon-button';

const IconButtonDisplay = ({ icons }) => {
  return (
    <div className='row'>
      {icons.map((icon) => (
        <IconButton
          icon={icon.name}
          label={icon.label}
          onIcon={icon.activeName}
          onClick={icon.onClick}
          key={icon.name}
        />
      ))}
    </div>
  );
};

export default IconButtonDisplay;
