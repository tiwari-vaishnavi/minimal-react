import PropTypes from 'prop-types';
import {  useFormContext } from 'react-hook-form';
import React from 'react';

import FormHelperText from '@mui/material/FormHelperText';
import Editor from '../editor/editor';


// ----------------------------------------------------------------------

export default function RHFEditor({ name, helperText, ...other }) {
  const {
    control,
  } = useFormContext();


 
  return (
    <Editor
          id={name}
        />
  );
}

RHFEditor.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
};
