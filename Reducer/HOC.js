import React, { Component } from 'react';
import CommentList from './components/CommentList';
import BlogPost from './components/BlogPost';
import AddComment from './components/AddComment';
import CommentList2 from './hoc-component/CommentList';
import BlogPost2 from './hoc-component/BlogPost';
// import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
// BrowserRouter as Router：Router是BrowserRouterd的别名
import { HashRouter as Router, Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';


//组件：UI组件（展示数据）、容器组件（请求数据，写逻辑）
//components存放UI组件、containers：存放容器组件
//木偶组件（展示数据）、智能组件（请求数据、逻辑）

export default class HOC extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* <CommentList />
                        <AddComment />
                        <BlogPost id={2} /> */}

                    {/* <CommentList2 list="hello" />
                        <AddComment />
                        <BlogPost2 id={2} /> */}
                    <ul>
                        <li><Link to="/">CommentList2</Link></li>
                        <li><Link to={{
                            pathname: '/addComment',
                            state: { id: 100 }
                        }}>AddComment</Link></li>
                        <li><NavLink exact activeStyle={{ background: 'yellow' }} to="/">CommentList2</NavLink></li>
                        <li><NavLink activeStyle={{ background: 'yellow' }} to="/addComment?id=3">AddComment</NavLink></li>
                    </ul>
                    <Switch>
                        {/* 只会挂载与 <Route> 路径匹配成功的第一个
                        子节点只能是 <Route> 或 <Redirect /> */}
                        <Redirect from="/home" to="/addComment" />

                        <Route exact path="/" component={CommentList2} />
                        <Route path="/addComment" component={AddComment} />
                        <Route path="/home" render={() => <Redirect to="/addComment" />} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
