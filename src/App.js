import React from 'react';
import PostList from './components/PostList';
import './App.css';

const API = 'https://jsonplaceholder.typicode.com/';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  };

  componentDidMount() {
    fetch(API + 'posts')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return () {
    return (<PostList posts={this.state.posts}/>);
  };
};
