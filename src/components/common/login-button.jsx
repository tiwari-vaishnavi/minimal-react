import PropTypes from 'prop-types';

import Button from '@mui/material/Button';


// ----------------------------------------------------------------------

export default function LoginButton({ sx }) {
  return (
    <Button  variant="outlined" sx={{ mr: 1, ...sx }}>
      Login
    </Button>
  );
}

LoginButton.propTypes = {
  sx: PropTypes.object,
};
