import React from 'react';

// Components
import { Button } from '@rmwc/button';

const Buttons = ({ label }) => {
  return (
    <div className='row'>
      <Button raised>{label}</Button>
      <Button outlined>{label}</Button>
      <Button>{label}</Button>
    </div>
  );
};

export default Buttons;
