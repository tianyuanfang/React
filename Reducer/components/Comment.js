import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
     <li>{this.props.comment.msg}</li>
    )
  }
}