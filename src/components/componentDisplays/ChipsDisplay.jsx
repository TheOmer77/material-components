import React, { useState } from 'react';

// Components
import { Chip, ChipSet } from '@rmwc/chip';

const ChipsDisplay = ({ chips }) => {
  const [choice, setChoice] = useState(null);

  const [selected, setSelected] = React.useState({});
  const toggleSelected = (key) =>
    setSelected({
      ...selected,
      [key]: !selected[key],
    });

  return (
    <>
      <div className='row'>
        <ChipSet choice>
          {chips.map((chip) => (
            <Chip
              label={chip.label}
              key={chip.label}
              selected={choice === chip.label}
              onInteraction={() => setChoice(chip.label)}
            />
          ))}
        </ChipSet>
      </div>
      <div className='row'>
        <ChipSet filter>
          {chips.map((chip) => (
            <Chip
              label={chip.label}
              icon={chip.icon}
              key={chip.label}
              selected={selected[chip.label]}
              checkmark
              onInteraction={() => toggleSelected(chip.label)}
            />
          ))}
        </ChipSet>
      </div>
    </>
  );
};

export default ChipsDisplay;
