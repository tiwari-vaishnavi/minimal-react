import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Label from '../label';

// ----------------------------------------------------------------------

export default function AddressItem({ address, action, sx, ...other }) {
 

  return (
    <Stack
      component={Paper}
      spacing={2}
      alignItems={{ md: 'flex-end' }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Stack flexGrow={1} spacing={1}>
        <Stack direction="row" alignItems="center">
          <Typography variant="subtitle2">
            {/* {name} */}
            <Box component="span" sx={{ ml: 0.5, typography: 'body2', color: 'text.secondary' }}>
            
            </Box>
          </Typography>

       
            <Label color="info" sx={{ ml: 1 }}>
              Default
            </Label>
     
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
     
        </Typography>
      </Stack>

      {action && action}
    </Stack>
  );
}
