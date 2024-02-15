import { Helmet } from 'react-helmet-async';
import OverviewEcommerceView from './OverviewEcommerceView';
import React from 'react';

export default function EcommercePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: E-Commerce</title>
      </Helmet>

      <OverviewEcommerceView />
    </>
  );
}
