import React, {Component} from 'react';
import PostListItem from './PostListItem';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
      posts: this.props.posts
    };

    this.onClick = this
      .onClick
      .bind(this);
  };

  onClick = () => {
    this.setState(({counter}) => ({
      counter: counter + 10
    }));
  };

  render() {
    let {posts, counter} = this.state;

    return (
      <div className="listPosts">
        {posts.some((post, index) => {
          return index < counter
            ? <PostListItem key={post.id} {...post}/>
            : true;
        })}
      </div>
    );
  };

}