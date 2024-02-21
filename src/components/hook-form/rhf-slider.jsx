import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import Slider from '@mui/material/Slider';
import FormHelperText from '@mui/material/FormHelperText';

// ----------------------------------------------------------------------

export default function RHFSlider({ name, helperText, ...other }) {
  const { control } = useFormContext();

  return (
 
          <Slider valueLabelDisplay="auto" />

         
  );
}

RHFSlider.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
};
