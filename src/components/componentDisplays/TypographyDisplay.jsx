import { Typography } from '@rmwc/typography';
import React from 'react';

const TypographyDisplay = () => {
  return (
    <>
      <div className='row align-start'>
        <Typography use='headline1'>H1</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='headline2'>H2</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='headline3'>H3</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='headline4'>H4</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='headline5'>H5</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='headline6'>H6</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='subtitle1'>Subtitle1</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='subtitle2'>Subtitle2</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='body1'>Body1</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='body2'>Body2</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='caption'>Caption</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='button'>Button</Typography>
      </div>
      <div className='row align-start'>
        <Typography use='overline'>Overline</Typography>
      </div>
    </>
  );
};

export default TypographyDisplay;
