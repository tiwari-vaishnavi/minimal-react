
import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


import Iconify from '../../components/iconify';


// ----------------------------------------------------------------------

export default function UploadAvatar({ }) {
  


 



  
    
      

  const renderContent = (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
        borderRadius: '50%',
        position: 'relative',
      }}
    >
     
    </Box>
  );

  return (
    <>
      <Box
     
        sx={{
          p: 1,
          m: 'auto',
          width: 144,
          height: 144,
          cursor: 'pointer',
          overflow: 'hidden',
          borderRadius: '50%',
          border: (theme) => `1px dashed ${alpha(theme.palette.grey[500], 0.2)}`,
         
            opacity: 0.72,
          
        }}
      >
       

      </Box>

   

     
    </>
  );
}

