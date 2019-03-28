import React, { Component } from 'react';
import Comment from '../components/Comment';
import DataSource from '../DataSource/DataSource';
import withSubscription from './withSubscription';

class BlogPost extends Component {//容器组件
  constructor() {
    super();
    this.state = {
      comments: DataSource.getBlogPost()
    }
  }
  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }
  handleChange = () => {
    this.setState({
      comments: DataSource.getBlogPost()
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
          <Comment comment={this.props.data}/>
        </ul>
      </div>
    )
  }
}
export default withSubscription(BlogPost, (ds,id) => ds.getBlogById(id));

