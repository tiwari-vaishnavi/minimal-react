import { Helmet } from 'react-helmet-async';
import OverviewBankingView from './OverviewBankingView';
import React from 'react';

// ----------------------------------------------------------------------

export default function BankingPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Banking</title>
      </Helmet>

      <OverviewBankingView />
    </>
  );
}
