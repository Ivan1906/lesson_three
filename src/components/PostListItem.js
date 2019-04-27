import React, {Component} from 'react';

export default class PostListItem extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id;
  };

  render() {
    const {id, title, body} = this.props;
    return (
      <div className="cardPost" id={id}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}