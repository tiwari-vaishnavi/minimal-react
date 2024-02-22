import Container from '@mui/material/Container';
import React from 'react';


import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';

import TourNewEditForm from './tour-new-edit-form';

// ----------------------------------------------------------------------

export default function TourCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new tour"
        links={[
          {
            name: 'Dashboard'          },
          {
            name: 'Tour'          },
          { name: 'New tour' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <TourNewEditForm />
    </Container>
  );
}
