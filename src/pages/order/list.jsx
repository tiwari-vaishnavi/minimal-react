import { Helmet } from 'react-helmet-async';
import OrderListView from './OrderListView';
import React from 'react';

// ----------------------------------------------------------------------

export default function OrderListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Order List</title>
      </Helmet>

      <OrderListView />
    </>
  );
}
