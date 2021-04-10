import React from 'react';

// Components
import {
  TopAppBar,
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar';
import { Switch } from '@rmwc/switch';
import { Typography } from '@rmwc/typography';

const AppBar = ({ rtl, setRtl }) => {
  return (
    <>
      <TopAppBar fixed>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarTitle>Material Components in React</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <Switch checked={rtl} onChange={(e) => setRtl(e.target.checked)} />
            <Typography use='subtitle1'>
              <span style={{ marginInlineStart: '.5rem' }}>RTL</span>
            </Typography>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>
  );
};

export default AppBar;
