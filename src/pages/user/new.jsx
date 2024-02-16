import React from 'react';
import { Helmet } from 'react-helmet-async';
import UserCreateView from './UserCreateView';

export default function UserCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new user</title>
      </Helmet>

      <UserCreateView />
    </>
  );
}
