import React, {Component} from 'react';
import {PostList} from './components/PostList';
import {Loader} from './components/Loader';
import {MoreButton} from './components/MoreButton';
import {Filters} from './components/Filters';

import './App.css';

const API = 'https://jsonplaceholder.typicode.com/';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      counter: 10,
      isLoader: true,
      textSearch: '',
      sortBy: 'none'
    };
  };

  onClick = () => {
    this.setState(({counter}) => ({
      counter: counter + 10
    }));
  };

  onChange = (value) => {
    this.setState(({textSearch}) => ({textSearch: value}));
  };

  onSelect = (value) => {
    this.setState(({sortBy}) => ({sortBy: value}));
  };

  componentDidMount() {
    let fromDate = new Date(2018, 0, 1);
    let toDate = new Date(2019, 11, 31);

    fetch(API + 'posts')
      .then(response => response.json())
      .then(posts => posts.map(post => {
        return {
          ...post,
          date: new Date(+ fromDate + Math.random() * (toDate - fromDate))
        }
      }))
      .then(data => this.setState(({isLoader}) => ({
        posts: data,
        isLoader: !isLoader
      })));
  }

  render() {
    let {isLoader, posts, counter, textSearch, sortBy} = this.state;

    if (sortBy !== 'none') {
      posts.sort((a, b) => {
        return (a[`${sortBy}`] > b[`${sortBy}`])
          ? 1
          : (a[`${sortBy}`] < b[`${sortBy}`])
            ? -1
            : 0;
      });
    };

    posts = posts.filter(post => post.title.includes(textSearch)
      ? post
      : null).filter((post, index) => index < counter
      ? post
      : null);

    return (isLoader
      ? (<Loader/>)
      : (
        <React.Fragment>
          <Filters onChange={this.onChange} onSelect={this.onSelect}/>
          <PostList posts={posts}/>
          <MoreButton
            onClick={this.onClick}
            textBtn={posts.length >= counter
            ? "Add 10 records"
            : "Records none!!!"}/>
        </React.Fragment>
      ));
  };
};
