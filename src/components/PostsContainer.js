import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../redux/reducers/posts'
import Posts from './Posts'
import {Route, Switch } from 'react-router-dom'
import Post from './Post'

class PostsContainer extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <Switch>
          <Route exact path='/posts/' component={Posts} />
          <Route path='/posts/:id' component={Post} />
      </Switch>
    )
  }
}
export default connect (null, {getPosts})(PostsContainer)