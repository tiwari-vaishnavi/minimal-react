import React from 'react';
import { Helmet } from 'react-helmet-async';
import TourListView from './tour-list-view';


// ----------------------------------------------------------------------

export default function TourListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Tour List</title>
      </Helmet>

      <TourListView/>
    </>
  );
}
