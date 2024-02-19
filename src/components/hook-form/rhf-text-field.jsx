import PropTypes from 'prop-types';
import {  useFormContext } from 'react-hook-form';
import React from 'react';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

export default function RHFTextField({ name, helperText, type, ...other }) {
  const { control } = useFormContext();

  return (
  
        <TextField
          fullWidth
          type={type}
          {...other}
        />
     
  );
}

RHFTextField.propTypes = {
  helperText: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
};
