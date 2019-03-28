import React, { Component } from 'react';
import DataSource from '../DataSource/DataSource';

function getDisplayName(WrappedComponent) {//组件名
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
export default function withSubscription(WrappedComponent, selectData) {//高阶组件->函数
    // WrappedComponent->CommentList
    // function selectData(ds){return ds.getComments();}

    // WrappedComponent->BlogPost
    // function selectData(ds,id){return ds.getBlogById(id);}
    class withSubscription extends Component {
        constructor(props) {
            // console.log('constructor');
            super(props);
            // console.log(props);//{list:'hello'} {id:2}
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props.id)
            };
            // console.log(this.state.data);
        }

        componentDidMount() {
            // console.log('componentDidMount');
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            // console.log('componentWillUnmount');
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {//类的方法默认是不会绑定 this 的
            // console.log(this);//undefined
            this.setState({
                data: selectData(DataSource, this.props.id)
            });
        }

        render() {
            // console.log('render');
            // console.log({...this.props});//{list:'hello'}
            return <WrappedComponent data={this.state.data} {...this.props} />;
            // data={this.state.data} {...this.props}是传给CommentList的props
        }
    };
    withSubscription.displayName = `withSubscription(${getDisplayName(WrappedComponent)})`;
    return withSubscription;
}