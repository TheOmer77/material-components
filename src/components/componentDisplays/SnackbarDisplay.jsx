import React, { useState } from 'react';
import { createPortal } from 'react-dom';

// Components
import { Button } from '@rmwc/button';
import { Snackbar, SnackbarAction } from '@rmwc/snackbar';

import AppTheme from '../AppTheme';

const SnackbarDisplay = ({ message }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BasicSnackbar open={open} setOpen={setOpen} message={message} />

      <div className='row'>
        <Button raised label='Show snackbar' onClick={() => setOpen(!open)} />
      </div>
    </>
  );
};

const BasicSnackbar = ({ open, setOpen, message }) =>
  createPortal(
    // Since this is in a portal we need to re-apply the app theme.
    <AppTheme>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message={message}
        dismissesOnAction
        // For some reason the theme isn't applied to the snackbar action... probably a bug.
        action={<SnackbarAction label='Got it' />}
      />
    </AppTheme>,
    document.getElementById('snackbar')
  );

export default SnackbarDisplay;
