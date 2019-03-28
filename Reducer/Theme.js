import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import HOC from './HOC';
import colorContext from './context/colorContext';

export default class Theme extends Component {
    constructor() {
        super();
        this.state = {
            value: 'blue'
        }
    }
    changeColor = (color) => {
        this.setState({
            value: this.state.value == color ? 'blue' : 'green'
        });
    }
    render() {
        return (
            // Portals 提供了一种将子节点渲染到父组件(#root)以外的 DOM 节点(#app)的方式
            // ReactDOM.createPortal(child, container)
            ReactDOM.createPortal(
                <div>
                    <colorContext.Provider value={this.state.value}>
                        <HOC />
                    </colorContext.Provider>
                    <button onClick={() => this.changeColor('green')}>变色</button>
                </div>,
                document.getElementById('app')
            )
        )
    }
}