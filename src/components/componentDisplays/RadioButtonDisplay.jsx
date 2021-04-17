import React, { useState } from 'react';
import { Radio } from '@rmwc/radio';

const RadioButtonDisplay = ({ data }) => {
  const [value, setValue] = useState(data[0].value);

  return (
    <div className='row'>
      {data.map((item) => (
        <Radio
          key={item.value}
          value={item.value}
          checked={value === item.value}
          onChange={() => setValue(item.value)}
        >
          {item.label}
        </Radio>
      ))}
    </div>
  );
};
export default RadioButtonDisplay;
