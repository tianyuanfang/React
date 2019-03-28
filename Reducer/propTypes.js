import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Types extends Component {
  render() {
    return (
      <div>
        hello {this.props.type}<br />
        hello {this.props.name}
      </div>
    )
  }
}
//参数类型检查
Types.propTypes = {//类属性
  type: PropTypes.string.isRequired,//PropTypes是引用的方法
  //在任何 PropTypes 属性后面加上 `isRequired`后缀，这样如果这个属性父组件没有提供时，会打印警告信息
  name: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])//检测时name可以是oneOfType的参数数组中任何类型
}
//参数默认值
Types.defaultProps = {
  type:'num',
  name: 'react'
}


