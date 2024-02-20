import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import Switch from '@mui/material/Switch';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export default function RHFSwitch() {

  return (
 
    <FormControlLabel 
    value="yes" control={<Switch />} /> 
  );
}

