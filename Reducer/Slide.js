import React, { Component } from 'react'

export default class Slide extends Component {
    render() {
        let style = {
            width: 800 * (this.props.imgs.length + 1),
            left: -800 * this.props.index
        };
        return (
            <ul style={style} className="slides" ref={ul => this.ul = ul}>
                {
                    this.props.imgs.map((item, index) => {
                        return <li key={index}><img src={item} /></li>
                    })
                }
                <li><img src={this.props.imgs[0]} /></li>
            </ul>
        )
    }
}
