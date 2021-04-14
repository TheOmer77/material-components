import React, { useState } from 'react';

// Components
import AppTheme from './components/AppTheme';
import ComponentDisplay from './components/ComponentDisplay';
import MainAppBar from './components/MainAppBar';
import {
  Avatars,
  Badges,
  Buttons,
  Cards,
  Checkboxes,
  Chips,
  DataTables,
  Dialogs,
  Drawers,
  Fabs,
  IconButtons,
  Icons,
  Snackbars,
  TopAppBars,
  Typographys,
} from './components/componentDisplays';

// According to the RMWC docs, it is recommended to only import components you use.
import { Typography } from '@rmwc/typography';

// CSS
import './styles/App.scss';
import './styles/fonts.css';

// According to the RMWC docs, it is recommended to only import styles for components you use.
// import 'rmwc/dist/styles';

// Some dummy data for demonstration
import {
  avatarData,
  cardButtonsData,
  chipsData,
  dataTableData,
  drawerData,
  iconButtonsData,
} from './dummyData';

const App = () => {
  const [rtl, setRtl] = useState(false);
  document.dir = rtl ? 'rtl' : 'ltr';

  return (
    <AppTheme>
      <div>
        <MainAppBar rtl={rtl} setRtl={setRtl} />
        <Typography use='body1'>
          <div className='container'>
            <ComponentDisplay
              title='Avatars'
              docsLink='https://rmwc.io/avatars'
            >
              <Avatars data={avatarData} />
            </ComponentDisplay>
            <ComponentDisplay title='Badges' docsLink='https://rmwc.io/badges'>
              <Badges />
            </ComponentDisplay>
            <ComponentDisplay title='Button' docsLink='https://rmwc.io/buttons'>
              <Buttons label='Button' />
            </ComponentDisplay>
            <ComponentDisplay title='Cards' docsLink='https://rmwc.io/cards'>
              <Cards
                title='Card Title'
                subtitle='It is a card'
                image='/placeholder-landscape-short.png'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at quaerat voluptate ea debitis earum.'
                buttons={cardButtonsData}
              />
            </ComponentDisplay>
            <ComponentDisplay
              title='Checkboxes'
              docsLink='https://rmwc.io/checkboxes'
            >
              <Checkboxes />
            </ComponentDisplay>
            <ComponentDisplay title='Chips' docsLink='https://rmwc.io/chips'>
              <Chips chips={chipsData} />
            </ComponentDisplay>
            <ComponentDisplay
              title='Data Tables'
              docsLink='https://rmwc.io/data-tables'
            >
              <DataTables data={dataTableData} />
            </ComponentDisplay>
            <ComponentDisplay
              title='Dialogs'
              docsLink='https://rmwc.io/dialogs'
            >
              <Dialogs image='/random-thingy.png' />
            </ComponentDisplay>
            <ComponentDisplay
              title='Drawers'
              docsLink='https://rmwc.io/drawers'
            >
              <Drawers data={drawerData} />
            </ComponentDisplay>
            <ComponentDisplay
              title='Floating Action Button'
              docsLink='https://rmwc.io/fabs'
            >
              <Fabs icon='add' label='Create' />
            </ComponentDisplay>
            <ComponentDisplay title='Icons' docsLink='https://rmwc.io/icons'>
              <Icons />
            </ComponentDisplay>
            <ComponentDisplay
              title='Icon Buttons'
              docsLink='https://rmwc.io/icon-buttons'
            >
              <IconButtons icons={iconButtonsData} />
            </ComponentDisplay>
            <ComponentDisplay title='Grids'>TODO: Grids</ComponentDisplay>

            <ComponentDisplay title='Radio Buttons'>
              TODO: Radio Buttons
            </ComponentDisplay>
            <ComponentDisplay title='Select Menus'>
              TODO: Select Menus
            </ComponentDisplay>
            <ComponentDisplay title='Sliders'>TODO: Sliders</ComponentDisplay>
            <ComponentDisplay title='Switches'>TODO: Switches</ComponentDisplay>
            <ComponentDisplay title='Text Inputs'>
              TODO: Text Inputs
            </ComponentDisplay>
            <ComponentDisplay title='Linear Progress'>
              TODO: Linear Progress
            </ComponentDisplay>
            <ComponentDisplay title='Circular Progress'>
              TODO: Circular Progress
            </ComponentDisplay>
            <ComponentDisplay title='Lists'>TODO: Lists</ComponentDisplay>
            <ComponentDisplay title='Lists: Collapsible'>
              TODO: Lists: Collapsible
            </ComponentDisplay>
            <ComponentDisplay title='Lists: Variants'>
              TODO: Lists: Variants
            </ComponentDisplay>
            <ComponentDisplay title='Menus'>TODO: Menus</ComponentDisplay>
            <ComponentDisplay
              title='Snackbars'
              docsLink='https://rmwc.io/snackbars'
            >
              <Snackbars message='I am snackbar.' />
            </ComponentDisplay>
            <ComponentDisplay title='Tabs'>TODO: Tabs</ComponentDisplay>
            <ComponentDisplay title='Tooltips'>TODO: Tooltips</ComponentDisplay>
            <ComponentDisplay
              title='Top App Bar'
              docsLink='https://rmwc.io/top-app-bar'
            >
              <TopAppBars title='Title' />
            </ComponentDisplay>
            <ComponentDisplay
              title='Typography'
              docsLink='https://rmwc.io/typography'
            >
              <Typographys />
            </ComponentDisplay>
          </div>
        </Typography>
      </div>
    </AppTheme>
  );
};

export default App;
