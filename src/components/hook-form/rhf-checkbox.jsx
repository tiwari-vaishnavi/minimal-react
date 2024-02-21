import PropTypes from 'prop-types';
import {  useFormContext } from 'react-hook-form';
import React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export function RHFCheckbox({ name, helperText, ...other }) {
  const { control } = useFormContext();

  return (
    <div>
          <FormControlLabel control={<Checkbox {...field} checked={field.value} />} {...other} />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </div>
  );
}

RHFCheckbox.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
};

// ----------------------------------------------------------------------

export function RHFMultiCheckbox({ row, name, label, options, spacing, helperText, sx, ...other }) {
  const { control } = useFormContext();

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  return (
    <FormControl component="fieldset">
          {label && (
            <FormLabel component="legend" sx={{ typography: 'body2' }}>
              {label}
            </FormLabel>
          )}

          <FormGroup
            sx={{
              ...(row && {
                flexDirection: 'row',
              }),
              [`& .${formControlLabelClasses.root}`]: {
                '&:not(:last-of-type)': {
                  mb: spacing || 0,
                },
                ...(row && {
                  mr: 0,
                  '&:not(:last-of-type)': {
                    mr: spacing || 2,
                  },
                }),
              },
              ...sx,
            }}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                  />
                }
                label={option.label}
                {...other}
              />
            ))}
          </FormGroup>
        </FormControl>
  );
}

RHFMultiCheckbox.propTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  row: PropTypes.bool,
  spacing: PropTypes.number,
  sx: PropTypes.object,
};
