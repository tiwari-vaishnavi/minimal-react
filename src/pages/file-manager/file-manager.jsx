import React from 'react';
import { Helmet } from 'react-helmet-async';

import { FileManagerView } from './file-manager-view';

// ----------------------------------------------------------------------

export  function FileManagerPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: File Manager</title>
      </Helmet>

      <FileManagerView />
    </>
  );
}
