import React from 'react';


import FormHelperText from '@mui/material/FormHelperText';

import { Upload, UploadBox, UploadAvatar } from '../../components/upload';

// ----------------------------------------------------------------------

export function RHFUploadAvatar({ name, ...other }) {
 
  return (

    
     
      
       
          <UploadAvatar  />

       
          
        
       
      
    
  );
}


// ----------------------------------------------------------------------

export function RHFUploadBox({ name, ...other }) {
 

  return (
  
    
     
        <UploadBox />
    
  );
}



// ----------------------------------------------------------------------

export function RHFUpload({ name, multiple, helperText, ...other }) {
 

  return (
   
          <Upload
            multiple
         
          />
       
        )
      }
    



