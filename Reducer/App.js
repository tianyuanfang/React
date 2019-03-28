import React, { Fragment } from 'react';

function Hello(props) {
    return <div>hello {props.name}</div>
}
class App extends React.Component {
    constructor(props) {//构造函数是唯一能够初始化 this.state 的地方
        console.log('constructor');
        super(props);// 将父类中的 this 对象继承给子类
        // console.log(this.props);
        //没有调用super(props)，则构造函数中this.props为undefined
        //调用super(),构造函数中this.props也为undefined

        this.state = {//初始化this.state，只能在类内部修改，外部无法修改
            course: 'react',
            time: new Date().toLocaleString()
        }

        //绑定事件处理函数的this
        // this.handleClick=this.handleClick.bind(this);
    }

    handleClick = (id, e) => {//事件对象e放最后
        //事件处理函数的this为undefined，必须在构造函数中绑定this或用箭头函数
        // console.log(this);
        // console.log(id, e);
        setInterval(() => {//异步 后执行
            this.setState({//修改this.state
                time: new Date().toLocaleString()
            })
            // console.log(this.state);
        }, 1000);
    }

    //this.state改变时render重新调用
    render() {//return只能返回一个标签
        console.log('render');
        //数据只能从父组件到子组件，单向流动
        // console.log(this.props);//this.props是React.Component自定义好的对象；只读

        //Fragment要引入，是组件；文档碎片
        return (<Fragment>
            <Hello name={this.props.name} />
            <p>{this.props.wd}</p>
            <p>{this.state.course}</p>
            <p>{this.state.time}</p>
            {/* <button onClick={(e)=>{this.handleClick(200,e)}}>开始</button> */}
            <button onClick={this.handleClick.bind(this, 100)}>开始</button>
        </Fragment>)
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('static getDerivedStateFromProps');
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return 1;
    }
    componentDidUpdate(prevProps, prevState, a) {
        console.log('componentDidUpdate');
        console.log(a);
    }
    // componentWillUnmount() {
    //     console.log('componentWillUnmount');
    //     // clearInterval(ID);
    // }
    // componentDidCatch(error, info) {
    //     console.log('componentDidCatch');
    // }
}
export default App;