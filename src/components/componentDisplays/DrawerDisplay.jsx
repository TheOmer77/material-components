import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Components
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
} from '@rmwc/drawer';
import { List, ListItem, ListItemGraphic } from '@rmwc/list';
import { Button } from '@rmwc/button';

import AppTheme from '../AppTheme';

const DrawerDisplay = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='row'>
        <Drawer>
          <DrawerHeader>
            <DrawerTitle>{data.title}</DrawerTitle>
            {data.subtitle && <DrawerSubtitle>{data.subtitle}</DrawerSubtitle>}
          </DrawerHeader>
          <DrawerContent>
            <List>
              {data.items.map((item) => (
                <ListItem key={item.label}>
                  <ListItemGraphic icon={item.icon} />
                  {item.label}
                </ListItem>
              ))}
            </List>
          </DrawerContent>
        </Drawer>
      </div>
      <div className='row'>
        <Button onClick={() => setOpen(!open)} raised>
          Open modal drawer
        </Button>
      </div>
      <ModalDrawer data={data} open={open} setOpen={setOpen} />
    </>
  );
};

const ModalDrawer = ({ data, open, setOpen }) =>
  ReactDOM.createPortal(
    // Since this is in a portal we need to re-apply the app theme.
    <AppTheme>
      <Drawer modal open={open} onClose={() => setOpen(false)}>
        <DrawerHeader>
          <DrawerTitle>{data.title}</DrawerTitle>
          {data.subtitle && <DrawerSubtitle>{data.subtitle}</DrawerSubtitle>}
        </DrawerHeader>
        <DrawerContent>
          <List>
            {data.items.map((item) => (
              <ListItem key={item.label}>
                <ListItemGraphic icon={item.icon} />
                {item.label}
              </ListItem>
            ))}
          </List>
        </DrawerContent>
      </Drawer>
    </AppTheme>,
    document.getElementById('drawer')
  );

export default DrawerDisplay;
