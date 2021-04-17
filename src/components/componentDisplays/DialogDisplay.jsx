import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '@rmwc/button';
import {
  Dialog,
  DialogActions,
  DialogButton,
  DialogContent,
  DialogTitle,
} from '@rmwc/dialog';
import { Typography } from '@rmwc/typography';

import AppTheme from '../AppTheme';

const DialogDisplay = ({ image }) => {
  const [standardDialogOpen, setStandardDialogOpen] = useState(false);
  const [customDialogOpen, setCustomDialogOpen] = useState(false);

  return (
    <>
      <StandardDialog
        open={standardDialogOpen}
        setOpen={setStandardDialogOpen}
      />

      <CustomDialog
        open={customDialogOpen}
        setOpen={setCustomDialogOpen}
        image={image}
      />

      <div className='row'>
        <Button raised onClick={() => setStandardDialogOpen(true)}>
          Show standard dialog
        </Button>
      </div>
      <div className='row'>
        <Button raised onClick={() => setCustomDialogOpen(true)}>
          Show custom dialog
        </Button>
      </div>
    </>
  );
};

const StandardDialog = ({ open, setOpen }) =>
  createPortal(
    // Since this is in a portal we need to re-apply the app theme.
    <AppTheme>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        onClosed={(e) => console.log(e.detail.action)}
      >
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>This is a standard dialog.</DialogContent>
        <DialogActions>
          <DialogButton action='accept' isDefaultAction>
            OK
          </DialogButton>
          <DialogButton action='close'>Cancel</DialogButton>
        </DialogActions>
      </Dialog>
    </AppTheme>,
    document.getElementById('dialog')
  );

const CustomDialog = ({ open, setOpen, image }) =>
  createPortal(
    // Since this is in a portal we need to re-apply the app theme.
    <AppTheme>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            backgroundColor: 'var(--mdc-theme-primary)',
            color: 'var(--mdc-theme-on-primary)',
            padding: '1.5rem',
          }}
        >
          <Typography use='headline2'>Hello! 👋🏻</Typography>
        </div>
        <img src={image} alt='Dialog img' style={{ width: '100%' }} />
        <DialogContent>You can put literally anything in here.</DialogContent>
        <DialogActions>
          <DialogButton action='accept' isDefaultAction>
            OK
          </DialogButton>
        </DialogActions>
      </Dialog>
    </AppTheme>,
    document.getElementById('dialog')
  );

export default DialogDisplay;
