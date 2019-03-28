import React, { Component } from 'react'

export default class Controlled extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: 'hello',
            isClick: true,
            list: [1, 2, 3]
        }
    }
    // componentDidMount() {
    //     // console.log(this);
    //     this.inp.focus();
    //     // 类组件的this有refs属性，记录引用对象
    //     // console.log(this.refs);
    //     this.refs.b.style.backgroundColor = 'yellow';
    // }
    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            inputValue: e.target.value,
        })
    }
    handleClick = () => {
        // console.log(this);
        console.log(this.inp.value);
        this.setState({
            isClick: !this.state.isClick
        })
    }
    handleClick2 = () => {
        // console.log(this.props);
        // let li=this.state.list;
        // li.push(this.state.inputValue);
        this.setState({
            list: [...this.state.list, this.state.inputValue]// this.refs.inp2.value            
        })
    }
    render() {
        let ele = '<h1>hello</h1>';
        let style = { width: 100, height: '100px', backgroundColor: 'yellow' };
        return (
            <div>
                {/* 受控组件:输入的值由 React 控制 的 表单元素*/}
                {/* value={this.state.inputValue}中this.state只能由this.setState()修改，不可在外部修改 */}
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} /><br />
                {/* 非受控组件 */}
                <input type="text" defaultValue="默认值" /><br />
                {/* 非受控组件，refs引用 */}
                {/* inp是input标签，给this添加inp属性引用input */}
                <input ref={inp => this.inp = inp} />
                <button ref='b' onClick={this.handleClick}>提交</button>
                {/* DOM Elememts */}
                <button className={this.state.isClick ? 'red' : 'gray'} onClick={this.handleClick}>提交2</button>
                <br />
                {/*htmlFor代替for;点击"用户名:"会聚焦到input上 */}
                <label htmlFor="inp">用户名：</label>
                <input id="inp" />
                {/* dangerouslySetInnerHTML */}
                <div dangerouslySetInnerHTML={{ __html: ele }}></div>
            </div>

            // <div>
            //     {/* 渲染双标签子节点 */}
            //     {/* {this.props.children} */}
            //     {this.props.children()}{/*函数调用*/}
            //     <input type="text" ref="inp2" value={this.state.inputValue} onChange={this.handleChange} />
            //     <button className='red' onClick={this.handleClick2}>提交</button>
            //     <ul style={style}>{/* {}中的style是变量 */}
            //         {
            //             this.state.list.map((item, index) => {
            //                 // return <li>{item}</li>
            //                 return <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            //             })
            //         }
            //     </ul>
            // </div>
        )
    }
}

