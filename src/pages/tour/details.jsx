import React from 'react';
import { Helmet } from 'react-helmet-async';

import { useParams } from '../../components/hooks/use-params';
import TourDetailsView from './tour-details-view';


// ----------------------------------------------------------------------

export default function TourDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Analytics</title>
      </Helmet>

      <TourDetailsView id={`${id}`}/>
    </>
  );
}
