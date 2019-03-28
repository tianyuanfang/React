import React, { Component } from 'react';

export const { Provider, Consumer } = React.createContext('green');//green是默认值
// React.createContext解构出来的Provider和Consumer是两个组件，而且这个默认值是当Consumer在上层找不到
// Provider的时候才会使用，并不是Provider的默认值

//简单版，DOM渲染时要引用Provider
export default class Header extends Component {
    render() {
        return (
            <div>
                <Toolbar />
            </div>
        )
    }
}
class Toolbar extends Component {
    render() {
        return (
            <Button />
        )
    }
}
class Button extends Component {
    render() {
        return (
            <Consumer>
                {(value) => <button style={{ color: value }}>按钮</button>}
            </Consumer>
        )
    }
}


//改变按钮颜色，DOM渲染时不需引用Provider
// export default class Header extends Component {
//     constructor() {
//         super();
//         this.state = {
//             color: 'red'
//         }
//     }
//     handleClick = () => {
//         this.setState({
//             color: this.state.color == 'red' ? 'green' : 'red'
//         });
//     }
//     render() {
//         return (
//             <div>
//                 {/* Provider:相当于一个容器，提供基本的值，可以在这里和react的state关联起来，
//                 一旦Provider的value发生变化就会导致Consumer刷新，而且需要注意的是Provider
//                 的刷新不受shouldComponentUpdate 这个生命周期的影响 */}
//                 <Provider value={{ color: this.state.color, handleClick: this.handleClick }}>
//                     <Toolbar />
//                 </Provider>
//             </div>
//         )
//     }
// }
// class Toolbar extends Component {
//     render() {
//         return (
//             <Button />
//         )
//     }
// }
// class Button extends Component {
//     render() {
//         let style = { padding: '5px', fontSize: '1.1em', cursor: 'pointer' };
//         return (
//             // Consumer:使用该组件的时候需要在里面嵌套一个方法，参数为当前的context值，
//             // 值为和最近的Provider提供的相同，如果上层没有Provider，那么值和defaultValue相同
//             <Consumer>
//                 {
//                     (value) => {
//                         return <button style={{ color: value.color, ...style }}
//                             onClick={value.handleClick}>按钮</button>
//                     }
//                 }
//             </Consumer>
//         )
//     }
// }


