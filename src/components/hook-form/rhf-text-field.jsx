import { useFormContext } from "react-hook-form";
import React from "react";
import { TextField } from "@mui/material";
export default function RHFTextField({ name, field, helperText, type, error, ...other }) {
  const { control } = useFormContext();

 
  const fieldValue = field && field.value !== undefined ? field.value : '';

  return (
    <TextField
      {...field}
      fullWidth
      type={type}
      value={type === 'number' && fieldValue === 0 ? '' : fieldValue}
      onChange={(event) => {
        if (type === 'number') {
          field.onChange(Number(event.target.value));
        } else {
          field.onChange(event.target.value);
        }
      }}
      error={!!error}
      helperText={error ? error.message : helperText}
      {...other}
    />
  );
}
