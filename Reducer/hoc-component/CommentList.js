import React, { Component } from 'react';
import Comment from '../components/Comment';
import DataSource from '../DataSource/DataSource';
import withSubscription from './withSubscription';
import colorContext from '../context/colorContext';

class CommentList extends Component {//容器组件 
  render() {
    return (
      <colorContext.Consumer>
        {
          (value) => (<ul style={{color:value}}>
            {
              this.props.data.map((item, index) => {
                // console.log(this.props);
                {/* UI组件 */ }
                return <Comment comment={item} key={index} />
              })
            }
          </ul>)
        }
      </colorContext.Consumer>
    )
  }
}
export default withSubscription(CommentList, (ds) => ds.getComments());//ds是形参
