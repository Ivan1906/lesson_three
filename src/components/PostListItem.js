import React, {Component} from 'react';

export default class PostListItem extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id;
  };

  render() {
    const {id, title, body, date} = this.props;
    return (
      <div className="cardPost" id={id}>
        <b>{title}</b>
        <p>{body}</p>
        <span>Date post: {date.toLocaleDateString()}</span>
      </div>
    );
  }
}