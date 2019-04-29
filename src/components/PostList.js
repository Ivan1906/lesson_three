import React from 'react';
import PostListItem from './PostListItem';

export const PostList = ({posts}) => (
  <div className="postList">
    {posts.map(post => <PostListItem key={post.id} {...post}/>)}
  </div>
);