import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../redux/reducers/posts'

class PostsContainer extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <div>POSTS CONTAINER</div>
    )
  }
}
export default connect (null, {getPosts})(PostsContainer)