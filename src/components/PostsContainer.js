import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../redux/reducers/posts'
import Posts from './Posts'
import {Route, Switch } from 'react-router-dom'


class PostsContainer extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <Switch>
          <Route path='/posts/' component={Posts} />
      </Switch>
    )
  }
}
export default connect (null, {getPosts})(PostsContainer)