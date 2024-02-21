import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

export default function RHFTextField({ name, helperText, type, ...other }) {

  return (
        <TextField
          fullWidth
          type={type}
        />
  );
}

