import Container from '@mui/material/Container';
import React from 'react';

import JobNewEditForm from './job-new-edit-form';
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs/custom-breadcrumbs';


// ----------------------------------------------------------------------

export default function JobCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new job"
        links={[
          {
            name: 'Dashboard',
          },
          {
            name: 'Job',
          },
          { name: 'New job' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <JobNewEditForm />
    </Container>
  );
}
