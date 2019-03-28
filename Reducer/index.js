import React, { Component } from 'react';//提供JSX语法
import ReactDOM from 'react-dom';//将JSX渲染成DOM
import './index.css';
// import App from './App';
// import Types from './propTypes';
// import Controlled from './Controlled';
// import Child from './child-parent';
// import Carousel from './Carousel';
// import Axios from './axios';
// import Header, { Provider } from './Provider-Consumer';
// import HOC from './HOC';
// import colorContext from './context/colorContext';
// import Theme from './Theme';

// import { HashRouter as Router } from "react-router-dom";
// import Ant from './AntDesign';
// import "antd/dist/antd.css";

// import CustomLink from './containers/CustomLink';
// import NoMatch from './containers/noMatch';
// import AuthExample from './auth/AuthExample';
import Counter from './Counter';
import Todolist from './Todolist';

// 代理： 在package.json中加入
//  "proxy": "http://localhost:8000"
/*
1.组件创建：2种
-函数式（无状态组件）
-类声明式
2.JSX（语法糖）->对象
3.元素渲染
4.事件绑定、传参
5.组件生命周期
6.组件中的props(只读；父组件传到子组件的数据)、
  state（组件内管理组件中数据的，作用于当前组件，组件外不可修改）
  setState()->修改state
7.状态提升
*/

//基础语法
//part1
// const str = 'part1';
// const ele = <h1 className="tit" id="title">{str}</h1>;//className相当于js的class
// // console.log(ele);
// ReactDOM.render(ele, document.getElementById('root'));


//part2
// let ele2 = React.createElement('h1', {
//     id: 'h1',
//     className: 'tit'
// }, ['part2']);
// ReactDOM.render(ele2, document.getElementById('root'));


//part3:模拟ReactDOM.render
/* <h1 id="title2" class="tit2">
    'hello'
    'nihao'
    <p id="box">新年好</p>
</h1> */

// let obj = {
//     type: 'h1',//h1标签
//     props: {//属性
//         id: 'title2',//属性名：属性值
//         className: 'tit2',//className相当于js的class
//         children: ['hello', 'nihao', {//h1标签下的子节点
//             type: 'p',
//             props: {
//                 id: 'box',
//                 children: ['新年好']
//             }
//         }]
//     }
// };
// function render(obj, container) {
//     let { type, props } = obj;
//     //创建标签
//     var ele = document.createElement(type);
//     //遍历属性
//     // console.log(Object.keys(props));
//     Object.keys(props).forEach(key => {
//         // console.log(key);
//         if (key == 'className') {
//             ele.className = props[key];
//             // ele.setAttribute('class',props[key]);
//         } else if (key == 'children') {
//             props[key].forEach(item => {
//                 // ele.innerHTML=item;
//                 if (typeof item == 'object') {
//                     render(item, ele);
//                 } else {
//                     let txtNode = document.createTextNode(item);//添加文本节点
//                     ele.appendChild(txtNode);
//                 }
//             });
//         } else {
//             ele[key] = props[key];
//         }
//     });
//     //将创建的标签插入到容器中
//     container.appendChild(ele);
// }
// render(obj, document.getElementById('root'));


//part4:时钟
// function tick(){
//     const ele=(<div>
//         <p>时钟</p>
//         <p>{new Date().toLocaleString()}</p>        
//     </div>);
//     ReactDOM.render(ele,document.getElementById('root'));
// }
// setInterval(tick,1000);


//组件
//part1 函数定义组件
//传的参数类似于：
// {
//     name:'world',
//     id:'app'
// }
// function App(props) {
//     console.log(props);
//     return <h1>hello {props.name}</h1>;
// }
// ReactDOM.render(<App name="world" id='app' />, document.getElementById('root'));


// function Hello(props){
//     return <div>hello {props.name}</div>
// }
// function Hello2(){
//     return <Hello name="world"/>
// } 
// ReactDOM.render(<Hello2/>,document.getElementById('root'));


//part2 类定义组件 见App.js
//插入表达式或变量用{变量|表达式} 例：wd={num}
// let num = 100;
// ReactDOM.render(<App wd={num} name="app" />, document.getElementById('root'));


//part3 propTypes 见propTypes.js
// ReactDOM.render(<Types name="true"/>, document.getElementById('root'));


//part4 受控组件 见Controlled.js
// ReactDOM.render(<Controlled/>,document.getElementById('root'));

// ReactDOM.render(<Controlled><h1>title</h1></Controlled>,document.getElementById('root'));

// ReactDOM.render(<Controlled>
//     {/*就是一个函数声明，然后在Controlled组件中调用，
//     括号里也可以加形参，this.props.children('实参')*/}
//     {
//         () => {
//             //具体功能写在这里，也可以return，返回的内容在Controlled里可以用
//             console.log('函数调用');
//         }
//     }
// </Controlled>, document.getElementById('root'));


//part5 子组件向父组件传数据 见child-parent.js
// React是单向数据流，当有多个组件需要共享状态的时候，这就需要把状态放到这些组件共有的父组件App中，
// 相应地，这些组件就变成了子组件(Header,Footer)，从而涉及到父子组件之间的通信。父组件通过props 给子组件传递数据，
// 子组件则是通过调用父组件传给它的函数给父组件传递数据。

// ReactDOM.render(<Child />, document.getElementById('root'));


//part6 轮播 见Carousel.js
// let imgs=[
//   require('./images/banner01.jpg'),
//   require('./images/banner02.jpg'),
//   require('./images/banner03.jpg'),
//   require('./images/banner04.jpg'),
//   require('./images/banner05.jpg')
// ];
// ReactDOM.render(<Carousel imgs={imgs}/>, document.getElementById('root'));


//part7 见axios.js
// ReactDOM.render(<Axios />, document.getElementById('root'));

//part8 context
//简单版
// ReactDOM.render(
//     <Provider value='red'>
//         <Header />
//     </Provider>,
//     document.getElementById('root')
// );

//改变按钮颜色
// ReactDOM.render(<Header />, document.getElementById('root'));


//part9 高阶函数 见HOC.js
// ReactDOM.render(<HOC />, document.getElementById('root'));


//part10 context 见colorContext.js、Theme.js
// ReactDOM.render(<Theme />, document.getElementById('root'));\


//part11 见ant design.js
// ReactDOM.render(<Router><Ant /></Router>, document.getElementById('root'));

//part12 见CustomLink.js
// ReactDOM.render(<CustomLink/>, document.getElementById('root'));

//part13 见noMatch.js
// ReactDOM.render(<NoMatch />, document.getElementById('root'));

//part14 见AuthExample.js
// ReactDOM.render(<AuthExample />, document.getElementById('root'));



//part1 Redux 计数 见Counter.js
// ReactDOM.render(<Counter />, document.getElementById('root'));

//part2 TOdolist 见Todolist.js
ReactDOM.render(<div>
  <Counter />
  <Todolist />
</div>, document.getElementById('root'));


