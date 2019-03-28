import React, { Component } from 'react';
import Comment from './Comment';
import DataSource from '../DataSource/DataSource';

export default class BlogPost extends Component {//容器组件
  constructor(props) {
    // console.log(props);
    super(props);
    this.state = {
      // comments: DataSource.getBlogPost(),
      comments: DataSource.getBlogById(props.id)
    }
  }
  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }
  handleChange = () => {
    this.setState({
      // comments: DataSource.getBlogPost(),
      comments: DataSource.getBlogById(this.props.id)
    });
  }
  render() {
    return (
      <div>
        <ul>
          {/* {
            this.state.comments.map((item, index) => {
              //UI组件
              return <Comment comment={item} key={index} />
            })
          } */}
          <Comment comment={this.state.comments}/>
        </ul>
      </div>
    )
  }
}

