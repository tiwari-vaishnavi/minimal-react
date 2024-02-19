import { Helmet } from 'react-helmet-async';
import React from 'react';
import InvoiceCreateView from './InvoiceCreateView';

export default function InvoiceCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new invoice</title>
      </Helmet>

      <InvoiceCreateView />
    </>
  );
}
