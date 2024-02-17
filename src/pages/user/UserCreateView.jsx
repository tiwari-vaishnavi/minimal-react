import Container from '@mui/material/Container';
import React from 'react';
import { useSettingsContext } from '../../components/settings'; 
import CustomBreadcrumbs from '../../components/custom-breadcrumbs'

import UserNewEditForm from './user-new-edit-form';

export default function UserCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new user"
        links={[
          {
            name: 'Dashboard',
          },
          {
            name: 'User',
          },
          { name: 'New user' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <UserNewEditForm />
    </Container>
  );
}