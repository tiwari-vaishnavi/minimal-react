import React from 'react';
import Container from '@mui/material/Container';

import { useSettingsContext } from '../../components/settings/context/settings-context';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs/custom-breadcrumbs';

import PostNewEditForm from './post-new-edit-form';

// ----------------------------------------------------------------------

export default function PostCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new post"
        links={[
          {
            name: 'Dashboard',
          },
          {
            name: 'Blog',
          },
          {
            name: 'Create',
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <PostNewEditForm />
    </Container>
  );
}
