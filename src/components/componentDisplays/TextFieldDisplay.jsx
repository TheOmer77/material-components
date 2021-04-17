import { TextField } from '@rmwc/textfield';
import React from 'react';

const TextFieldDisplay = () => (
  <>
    <div className='row'>
      <div>
        <TextField
          label='Standard'
          helpText={{
            persistent: true,
            children: 'A filled text field.',
          }}
        />
      </div>
      <div>
        <TextField
          label='Standard disabled'
          disabled
          helpText={{
            persistent: true,
            children: 'The same but disabled.',
          }}
        />
      </div>
    </div>
    <div className='row'>
      <div>
        <TextField
          outlined
          label='Outlined'
          helpText={{
            persistent: true,
            children: 'An outlined text field.',
          }}
        />
      </div>
      <div>
        <TextField
          outlined
          label='Outlined disabled'
          disabled
          helpText={{
            persistent: true,
            children: 'The same but disabled.',
          }}
        />
      </div>
    </div>
  </>
);

export default TextFieldDisplay;
