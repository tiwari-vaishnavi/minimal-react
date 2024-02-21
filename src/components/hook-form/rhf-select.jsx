import PropTypes from 'prop-types';
import {  useFormContext } from 'react-hook-form';
import React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

// ----------------------------------------------------------------------

export function RHFSelect({
  name,
  native,
  maxHeight = 220,
  helperText,
  children,
  PaperPropsSx,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <TextField
    select
    fullWidth
    SelectProps={{
      native,
      MenuProps: {
        PaperProps: {
          sx: {
            ...(!native && {
              maxHeight: typeof maxHeight === 'number' ? maxHeight : 'unset',
            }),
            ...PaperPropsSx,
          },
        },
      },
      sx: { textTransform: 'capitalize' },
    }}
    {...other}
  >
    {children}
  </TextField>
  );
}

RHFSelect.propTypes = {
  PaperPropsSx: PropTypes.object,
  children: PropTypes.node,
  helperText: PropTypes.object,
  maxHeight: PropTypes.number,
  name: PropTypes.string,
  native: PropTypes.bool,
};

// ----------------------------------------------------------------------

export function RHFMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox,
  placeholder,
  helperText,
  ...other
}) {
  const { control } = useFormContext();

  const renderValues = (selectedIds) => {
    const selectedItems = options.filter((item) => selectedIds.includes(item.value));

    if (!selectedItems.length && placeholder) {
      return <Box sx={{ color: 'text.disabled' }}>{placeholder}</Box>;
    }

    if (chip) {
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selectedItems?.map((item) => (
            <Chip key={item.value} size="small" label={item.label} />
          ))}
        </Box>
      );
    }

    return selectedItems?.map((item) => item.label).join(', ');
  };

  return (
    <FormControl {...other}>
          {label && <InputLabel id={name}> {label} </InputLabel>}

          <Select
            // multiple
            displayEmpty={!!placeholder}
            id={`multiple-${name}`}
            labelId={name}
            label={label}
            renderValue={renderValues}
          >
            {options?.map((option) => {

              return (
                <MenuItem key={option.value} value={option?.value}>
                  {checkbox && <Checkbox size="small" disableRipple />}

                  {option.label}
                </MenuItem>
              );
            })}
          </Select>

            <FormHelperText></FormHelperText>
        </FormControl>
  );
}

RHFMultiSelect.propTypes = {
  checkbox: PropTypes.bool,
  chip: PropTypes.bool,
  helperText: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
};
