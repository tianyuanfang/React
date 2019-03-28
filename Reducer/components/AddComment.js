import React, { Component } from 'react'
import DataSource from '../DataSource/DataSource';
import colorContext from '../context/colorContext';
import url from 'url';

export default class AddComment extends Component {
    componentDidMount() {
        // console.log(this.props.location);
        console.log(url.parse(this.props.location.search,true));
    }
    render() {
        return (
            <div>
                <input type="text" ref={inp => this.inp = inp} autoFocus />
                <colorContext.Consumer>
                    {
                        (value) => (<button style={{ color: value }}
                            onClick={() => {
                                DataSource.addComment(this.inp.value);
                                this.inp.value = '';
                            }} >
                            添加评论
                        </button>)
                    }
                </colorContext.Consumer>
            </div>
        )
    }
}
