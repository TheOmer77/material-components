import React, { useState } from 'react';
import { createPortal } from 'react-dom';

// Components
import {
  Card,
  CardActionButton,
  CardActionButtons,
  CardActions,
  CardMedia,
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import { Snackbar } from '@rmwc/snackbar';

const CardDisplay = ({ title, subtitle, text, image, buttons }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(null);

  return (
    <>
      <NotifySnackbar
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        message={snackbarMessage}
      />

      <div className='row'>
        <Card style={{ width: '21rem' }}>
          <CardMedia
            sixteenByNine
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div style={{ padding: '0 1rem 1rem 1rem' }}>
            <Typography use='headline6' tag='h2'>
              {title}
            </Typography>
            <Typography
              use='subtitle2'
              tag='h3'
              theme='textSecondaryOnBackground'
              style={{ marginTop: '-1rem' }}
            >
              {subtitle}
            </Typography>
            <Typography use='body2' tag='div' theme='textSecondaryOnBackground'>
              {text}
            </Typography>
          </div>
          <CardActions>
            <CardActionButtons>
              {buttons.map((button) => (
                <CardActionButton
                  onClick={() => {
                    setSnackbarMessage(`You pressed ${button.text}.`);
                    setSnackbarOpen(true);
                  }}
                  key={button.text}
                >
                  {button.text}
                </CardActionButton>
              ))}
            </CardActionButtons>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

const NotifySnackbar = ({ message, open, setOpen }) =>
  createPortal(
    <Snackbar open={open} onClose={() => setOpen(false)} message={message} />,
    document.getElementById('snackbar')
  );

export default CardDisplay;
