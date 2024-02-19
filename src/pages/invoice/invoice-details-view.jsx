import PropTypes from 'prop-types';
import React from 'react';
import Container from '@mui/material/Container';



import InvoiceDetails from './invoice-details';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs/custom-breadcrumbs';
import { _invoices } from '../../_mock/_invoice';
import { useSettingsContext } from '../../components/settings/context/settings-context';



export default function InvoiceDetailsView({ id }) {
  const settings = useSettingsContext();

  const currentInvoice = _invoices.filter((invoice) => invoice.id === id)[0];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={currentInvoice?.invoiceNumber}
        links={[
          {
            name: 'Dashboard',
          },
          {
            name: 'Invoice',
          },
          { name: currentInvoice?.invoiceNumber },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <InvoiceDetails invoice={currentInvoice} />
    </Container>
  );
}

InvoiceDetailsView.propTypes = {
  id: PropTypes.string,
};
