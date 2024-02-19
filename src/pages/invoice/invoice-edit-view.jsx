import PropTypes from 'prop-types';
import React from 'react';
import Container from '@mui/material/Container';
import { _invoices } from '../../_mock';

import InvoiceNewEditForm from './invoice-new-edit-form';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings/context/settings-context';


export default function InvoiceEditView({ id }) {
  const settings = useSettingsContext();

  const currentInvoice = _invoices.find((invoice) => invoice.id === id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: 'Dashboard',
          },
          {
            name: 'Invoice',
          },
          { name: currentInvoice?.invoiceNumber },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <InvoiceNewEditForm currentInvoice={currentInvoice} />
    </Container>
  );
}

InvoiceEditView.propTypes = {
  id: PropTypes.string,
};
