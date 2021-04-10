import React from 'react';

// Components
import { Fab } from '@rmwc/fab';

const Fabs = ({ icon, label }) => {
  return (
    <div className='row'>
      <Fab icon={icon} mini />
      <Fab icon={icon} />
      <Fab icon={icon} label={label} />
    </div>
  );
};

export default Fabs;
