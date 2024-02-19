import { useFormContext } from "react-hook-form";
import React from "react";
import { Upload, UploadBox, UploadAvatar } from '../upload';
export function RHFUploadAvatar({ name, error, field, ...other }) {
  const { control } = useFormContext();

  return (
    <div>
      <UploadAvatar error={!!error} file={field ? field.value : null} {...other} />
      {!!error && (
        <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
          {error.message}
        </FormHelperText>
      )}
    </div>
  );
}

export function RHFUploadBox({ name, field, error, ...other }) {
  const { control } = useFormContext();

  return <UploadBox files={field ? field.value : null} error={!!error} {...other} />;
}

export function RHFUpload({ name, field, error, multiple, helperText, ...other }) {
  const { control } = useFormContext();

  return (
    <Upload
      accept={{ 'image/*': [] }}
      files={field ? field.value : null}
      error={!!error}
      helperText={
        (!!error || helperText) && (
          <FormHelperText error={!!error} sx={{ px: 2 }}>
            {error ? error.message : helperText}
          </FormHelperText>
        )
      }
      {...other}
    />
  );
}
