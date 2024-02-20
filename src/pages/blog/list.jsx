import { Helmet } from 'react-helmet-async';

import { PostListView } from './post-list-view';

// ----------------------------------------------------------------------

export default function PostListHomePage() {
  return (
    <>
      <Helmet>
        <title> Post: List</title>
      </Helmet>

      <PostListView />
    </>
  );
}
