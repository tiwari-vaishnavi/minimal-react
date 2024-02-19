import { useFormContext } from 'react-hook-form';
import React from 'react';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { RHFSelect } from '../../components/hook-form/rhf-select';
import RHFTextField from '../../components/hook-form/rhf-text-field';


export default function InvoiceNewEditStatusDate() {
  const { control } = useFormContext();
  const values = "";
  return (
    <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ p: 3, bgcolor: 'background.neutral' }}
    >
      <RHFTextField
        disabled
        name="invoiceNumber"
        label="Invoice number"
        value={values?.invoiceNumber}
      />

      <RHFSelect
        fullWidth
        name="status"
        label="Status"
        InputLabelProps={{ shrink: true }}
        PaperPropsSx={{ textTransform: 'capitalize' }}
      >
        {['paid', 'pending', 'overdue', 'draft'].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </RHFSelect>

      
          <DatePicker
            label="Date create"
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
          />
        

     
          <DatePicker
            label="Due date"
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
          />
       
    </Stack>
  );
}
