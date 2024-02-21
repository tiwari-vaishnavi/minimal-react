import React from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from '../../components/iconify';


// ----------------------------------------------------------------------

export default function AccountSocialLinks({ socialLinks }) {

  const defaultValues = {
    facebook: socialLinks.facebook,
    instagram: socialLinks.instagram,
    linkedin: socialLinks.linkedin,
    twitter: socialLinks.twitter,
  };

  const methods = useForm({
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
   
      <Stack component={Card} spacing={3} sx={{ p: 3 }}>
        
                <InputAdornment position="start">
                  <Iconify
                    width={24}
                    icon={
                      (link === 'facebook' && 'eva:facebook-fill') ||
                      (link === 'instagram' && 'ant-design:instagram-filled') ||
                      (link === 'linkedin' && 'eva:linkedin-fill') ||
                      (link === 'twitter' && 'eva:twitter-fill') ||
                      ''
                    }
                    color={
                      (link === 'facebook' && '#1877F2') ||
                      (link === 'instagram' && '#DF3E30') ||
                      (link === 'linkedin' && '#006097') ||
                      (link === 'twitter' && '#1C9CEA') ||
                      ''
                    }
                  />
                </InputAdornment>
              
            
          
        

        <LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={{ ml: 'auto' }}>
          Save Changes
        </LoadingButton>
      </Stack>
 
  );
}

