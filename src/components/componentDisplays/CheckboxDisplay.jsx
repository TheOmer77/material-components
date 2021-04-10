import React from 'react';

// Components
import { Checkbox } from '@rmwc/checkbox';

const CheckboxDisplay = () => (
  <>
    <div className='row'>
      <Checkbox checked />
      <Checkbox indeterminate />
      <Checkbox checked={false} />
    </div>
    <div className='row'>
      <Checkbox label='Checkbox' />
    </div>
  </>
);

export default CheckboxDisplay;
