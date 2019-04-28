import React from 'react';
import PostListItem from './PostListItem';

export const PostList = ({posts}) => (
  <React.Fragment>
    {posts.map(post => <PostListItem key={post.id} {...post}/>)}
  </React.Fragment>
);