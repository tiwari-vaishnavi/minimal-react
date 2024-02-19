import Container from '@mui/material/Container';
import React from 'react';

import InvoiceNewEditForm from './invoice-new-edit-form';
import { useSettingsContext } from '../../components/settings/context/settings-context';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs/custom-breadcrumbs';



export default function InvoiceCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new invoice"
        links={[
          {
            name: 'Dashboard',
          },
          {
            name: 'Invoice',
          },
          {
            name: 'New Invoice',
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <InvoiceNewEditForm />
    </Container>
  );
}
