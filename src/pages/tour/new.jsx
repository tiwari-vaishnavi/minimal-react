import React from 'react';
import { Helmet } from 'react-helmet-async';
import TourCreateView from './tour-create-view';



// ----------------------------------------------------------------------

export default function TourCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new tour</title>
      </Helmet>

      <TourCreateView/>
    </>
  );
}
