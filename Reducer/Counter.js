import React, { Component } from 'react';
import store from './store';//默认是index.js
// console.log(store.getState());
//store：连接action和Reducer的一个对象
//action：一个对象，描述state的变化，传到store
//Reducer：定义了如何响应action描述的state的变化，并发送到store

export default class Counter extends Component {
    constructor() {
        super();
        // this.state = store.getState();
        this.state = {
            num: store.getState().counter
        };
        store.subscribe(() => {
            // this.setState(store.getState());
            this.setState({
                num: store.getState().counter
            });
        });
    }
    handleAdd = () => {
        let action = { type: 'add' };
        store.dispatch(action);
        // console.log(store.getState());
    }
    handleDel = () => {
        let action = { type: 'del' };
        store.dispatch(action);
        // console.log(store.getState());
    }
    oddAdd = () => {
        if (this.state.num % 2 != 0) {
            store.dispatch({
                type: 'add'
            });
        }
    }
    asyncAdd=()=>{
        setTimeout(()=>{
            store.dispatch({
                type:'add'
            });
        },500);
    }
    render() {
        let style = { padding: '8px', margin: '5px' };
        return (
            <div>
                <p>点击: {this.state.num} 次</p>
                <button style={style} onClick={this.handleAdd}>+</button>
                <button style={style} onClick={this.handleDel}>-</button><br />
                <button style={style} onClick={this.oddAdd}>奇数增加</button>
                <button style={style} onClick={this.asyncAdd}>异步增加</button><br />
            </div>
        )
    }
}
