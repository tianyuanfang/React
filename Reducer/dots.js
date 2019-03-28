import React, { Component } from 'react'

export default class Dots extends Component {
    render() {
        return (
            <ul className="dots">
                {
                    this.props.imgs.map((item, index) => {
                        return <li key={index} className={this.props.index == index ||
                            (index == 0 && this.props.index == this.props.imgs.length)
                            ? 'active' : ''} onClick={this.props.handleClick.bind(this, index)}>{index + 1}</li>
                    })
                }
                {/* <li className={this.state.index == 0 || this.state.index == 5 ? 'active' : ''}>1</li>
                    <li className={this.state.index == 1 ? 'active' : ''}>2</li>
                    <li className={this.state.index == 2 ? 'active' : ''}>3</li>
                    <li className={this.state.index == 3 ? 'active' : ''}>4</li>
                    <li className={this.state.index == 4 ? 'active' : ''}>5</li>
               */}
            </ul>
        )
    }
}
