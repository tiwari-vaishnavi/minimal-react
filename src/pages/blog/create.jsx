import React  from 'react';
import { Helmet } from 'react-helmet-async';
import PostCreateView from './post-create-view';



// ----------------------------------------------------------------------

export default function PostCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new post</title>
      </Helmet>

      <PostCreateView />
    </>
  );
}
