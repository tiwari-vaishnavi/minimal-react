import { Helmet } from 'react-helmet-async';
import UserCardsView from './UserCardsView';
import React from 'react';


// ----------------------------------------------------------------------

export default function UserCardsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: User Cards</title>
      </Helmet>

      <UserCardsView />
    </>
  );
}
