import React from 'react';
import { Select } from '@rmwc/select';

const SelectDisplay = () => {
  return (
    <>
      <div className='row'>
        <Select
          label='Standard'
          enhanced
          options={['Cookies', 'Pizza', 'Icecream']}
        />
      </div>
      <div className='row'>
        <Select
          label='Outlined'
          outlined
          enhanced
          options={['Cookies', 'Pizza', 'Icecream']}
        />
      </div>
    </>
  );
};

export default SelectDisplay;
