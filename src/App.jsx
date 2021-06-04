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
  ImageLists,
  Lists,
  RadioButtons,
  Selects,
  Snackbars,
  TextFields,
  TopAppBars,
  Typographys,
} from './components/componentDisplays';

// According to the RMWC docs, it is recommended to only import components you use.
import { Typography } from '@rmwc/typography';

// Some dummy data for demonstration
import {
  avatarData,
  cardButtonsData,
  chipsData,
  dataTableData,
  drawerData,
  iconButtonsData,
  imageListData,
  listData,
  radioButtonData,
} from './constants/dummyData';

// Import the RMWC CSS, as well as my own tweaks SCSS
import './styles/App.scss';
import 'rmwc/dist/styles';

const App = () => {
  const [rtl, setRtl] = useState(false);
  document.dir = rtl ? 'rtl' : 'ltr';

  return (
    <AppTheme>
      <MainAppBar rtl={rtl} setRtl={setRtl} />
      <Typography use='body1'>
        <div className='container'>
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
          <ComponentDisplay title='Dialogs' docsLink='https://rmwc.io/dialogs'>
            <Dialogs image='/random-thingy.png' />
          </ComponentDisplay>
          <ComponentDisplay title='Drawers' docsLink='https://rmwc.io/drawers'>
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
          <ComponentDisplay
            title='Image Lists'
            docsLink='https://rmwc.io/image-lists'
          >
            <ImageLists data={imageListData} />
          </ComponentDisplay>
          <ComponentDisplay
            title='Radio Buttons'
            docsLink='https://rmwc.io/radio-buttons'
          >
            <RadioButtons data={radioButtonData} />
          </ComponentDisplay>
          <ComponentDisplay
            title='Select Menus'
            docsLink='https://rmwc.io/select-menus'
          >
            <Selects />
          </ComponentDisplay>
          <ComponentDisplay title='Sliders'>TODO: Sliders</ComponentDisplay>
          <ComponentDisplay title='Switches'>TODO: Switches</ComponentDisplay>
          <ComponentDisplay
            title='Text Fields'
            docsLink='https://rmwc.io/text-fields'
          >
            <TextFields />
          </ComponentDisplay>
          <ComponentDisplay title='Linear Progress'>
            TODO: Linear Progress
          </ComponentDisplay>
          <ComponentDisplay title='Circular Progress'>
            TODO: Circular Progress
          </ComponentDisplay>
          <ComponentDisplay title='Lists' docsLink='https://rmwc.io/lists'>
            <Lists data={listData} />
          </ComponentDisplay>
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
    </AppTheme>
  );
};

export default App;
