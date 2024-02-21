import PropTypes from 'prop-types';
import {  useFormContext } from 'react-hook-form';
import React from 'react';

import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export default function RHFRadioGroup({
  row,
  name,
  label,
  options,
  spacing,
  helperText,
  ...other
}) {
  const { control } = useFormContext();

  const labelledby = label ? `${name}-${label}` : '';

  return (
    <FormControl component="fieldset">
    {label && (
      <FormLabel component="legend" id={labelledby} sx={{ typography: 'body2' }}>
        {label}
      </FormLabel>
    )}

    <RadioGroup aria-labelledby={labelledby} row={row} {...other}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
          sx={{
            '&:not(:last-of-type)': {
              mb: spacing || 0,
            },
            ...(row && {
              mr: 0,
              '&:not(:last-of-type)': {
                mr: spacing || 2,
              },
            }),
          }}
        />
      ))}
    </RadioGroup>

  
  </FormControl>
  );
}

RHFRadioGroup.propTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  row: PropTypes.bool,
  spacing: PropTypes.number,
};
