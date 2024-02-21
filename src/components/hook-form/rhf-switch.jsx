import PropTypes from 'prop-types';
import {  useFormContext } from 'react-hook-form';
import React from 'react';

import Switch from '@mui/material/Switch';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export default function RHFSwitch({ name, helperText, ...other }) {
  const { control } = useFormContext();

  return (
    <div>
    <FormControlLabel control={<Switch/>} {...other} />

    
      <FormHelperText ></FormHelperText>
  
  </div>
  );
}

RHFSwitch.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
};
