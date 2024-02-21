import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {  useFormContext } from 'react-hook-form';
import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';

import Editor from '../editor';

// ----------------------------------------------------------------------

export default function RHFEditor({ name, helperText, ...other }) {
  const {
    control,
    watch,
    setValue,
    formState: { isSubmitSuccessful },
  } = useFormContext();

  const values = watch();

  useEffect(() => {
    if (values[name] === '<p><br></p>') {
      setValue(name, '', {
        shouldValidate: !isSubmitSuccessful,
      });
    }
  }, [isSubmitSuccessful, name, setValue, values]);

  return (
    <Editor
    id={name}
    {...other}
  />
  );
}

RHFEditor.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
};
