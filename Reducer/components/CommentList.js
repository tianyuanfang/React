import React, { Component } from 'react';
import Comment from './Comment';
import DataSource from '../DataSource/DataSource';

export default class CommentList extends Component {//容器组件
  constructor() {
    super();
    this.state = {
      comments: DataSource.getComments()
    }
  }
  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }
  handleChange = () => {
    this.setState({
      comments: DataSource.getComments()
    });
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.comments.map((item, index) => {
              {/* UI组件 */ }
              return <Comment comment={item} key={index} />
            })
          }
        </ul>
      </div>
    )
  }
}
