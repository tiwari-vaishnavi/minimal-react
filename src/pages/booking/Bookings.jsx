import React from 'react'
//import { Helmet } from 'react-helmet-async';
import OverviewBookingView from './OverviewBookingView';




export default function BookingView() {
  return (
    <>
      {/* <Helmet> */}
        <title> Bookings: App</title>
      {/* </Helmet> */}

      <OverviewBookingView/>
    </>
  );
}
