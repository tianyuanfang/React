import React, { Component } from 'react';

class Header extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         color: 'red'
    //     };
    // }
    // handleClick = () => {
    //     //setState是异步的；先执行console后执行setState
    //     this.setState({
    //         color: this.state.color == 'red' ? 'green' : 'red'
    //     });
    //     console.log(this.state.color);

    //     //setState是异步的
    //     // this.setState((state) => {//state是上一步的
    //     //     return {//return出新的state
    //     //         color: state.color == 'red' ? 'green' : 'red'
    //     //     }
    //     // }, () => {//改变完颜色再输出颜色值
    //     //     console.log(this.state.color);
    //     // });
    // }
    render() {
        return (
            <div>
                {/* <h1 style={{ color: this.state.color }}>Header</h1> */}
                {/* <button onClick={this.handleClick}>改变字体颜色</button> */}

                <h1 style={{ color: this.props.color }}>Header</h1>
                <button onClick={() => this.props.handleClick2('green')}>改变字体颜色</button>
                {/* () => this.props.handleClick2('green')也可写成this.props.handleClick2.bind(this,'green') */}
            </div>
        )
    }
}
class Footer extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: this.props.color }}>Footer</h1>
            </div>
        )
    }
}
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            color: 'red'
        };
    }
    handleClick2 = (color) => {
        // console.log(this.state.color);
        this.setState({
            // color: this.state.color == 'red' ? 'green' : 'red'
            color: this.state.color == color ? 'red' : 'green'
        });
    }
    render() {
        return [
            <Header key='h' color={this.state.color} handleClick2={this.handleClick2} />,
            <Footer key='f' color={this.state.color} />
        ]
    }
}


