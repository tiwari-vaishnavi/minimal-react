import { Helmet } from 'react-helmet-async';
import React from 'react';
import UserProfileView from './UserProfileView';


// ----------------------------------------------------------------------

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: User Profile</title>
      </Helmet>

      <UserProfileView />
    </>
  );
}
