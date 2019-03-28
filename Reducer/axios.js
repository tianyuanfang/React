import React, { Component } from 'react';
import axios from 'axios';

export default class Axios extends Component {
    constructor() {
        super();
        this.state = {
            authors: '',
            content: '',
            title: ''
        }
    }
    componentDidMount() {
        // axios.get('https://api.apiopen.top/recommendPoetry').then(res => {
        //     console.log(res);
        //     let { authors, content, title } = res.data.result;
        //     this.setState({ authors, content, title });//解构赋值
        // });

        // fetch('https://api.apiopen.top/recommendPoetry').then(res => res.json()).then(res => {
        //     console.log(res);
        //     let { authors, content, title } = res.result;
        //     this.setState({
        //         authors, content, title
        //     });
        // })

        // axios.post('/weatherApi',{
        //     city:'石家庄'
        // }).then(res=>{
        //     console.log(res.data.data.city);
        // });

        // axios({
        //     method: 'post',
        //     url: '/weatherApi',
        //     data: {
        //         city: '石家庄'
        //     }
        // }).then(res=>{
        //     console.log(res);
        // });
    }
    render() {
        return (
            <div>
                <h1>hello</h1>
                <p>{this.state.title}</p>
                <p>{this.state.authors}</p>
                <p>{this.state.content}</p>
            </div>
        )
    }
}
