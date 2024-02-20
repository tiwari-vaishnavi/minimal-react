import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import { countries } from '../../assets/data';

import Iconify from '../../components/iconify';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// ----------------------------------------------------------------------

export default function RHFAutocomplete() {


  return (
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Country</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
 
      label="Age"
      
    >
    
    </Select>
  </FormControl>
  );
}



// ----------------------------------------------------------------------

export function getCountry(inputValue) {
  const option = countries.filter((country) => country.label === inputValue)[0];

  return {
    ...option,
  };
}
