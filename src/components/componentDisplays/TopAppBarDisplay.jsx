import React from 'react';

// Components
import {
  TopAppBar,
  TopAppBarActionItem,
  TopAppBarNavigationIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar';

const TopAppBars = ({ title }) => {
  return (
    <>
      <div className='row'>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <TopAppBarNavigationIcon icon='menu' />
              <TopAppBarTitle>{title}</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon='share' />
              <TopAppBarActionItem icon='bookmark' />
              <TopAppBarActionItem icon='search' />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
      </div>
      <div className='row'>
        <TopAppBar shortCollapsed>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <TopAppBarNavigationIcon icon='menu' />
              <TopAppBarTitle>{title}</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon='favorite' />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
      </div>
    </>
  );
};

export default TopAppBars;
