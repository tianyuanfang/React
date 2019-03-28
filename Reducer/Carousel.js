import React, { Component } from 'react'
import Dots from './dots'
import Slide from './Slide'

export default class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    move = () => {
        if (this.state.index == this.props.imgs.length) {
            this.ul.ul.style.transitionDuration = '0s';//this.ul.ul->this.ul是Slide组件，再.ul是Slide的ul
            this.ul.ul.style.left = 0;
            setTimeout(() => {
                this.ul.ul.style.transitionDuration = '1s';
                this.setState({
                    index: 1
                });
            }, 0);
            return;
        }
        this.setState({
            index: this.state.index + 1
        })
    }
    componentDidMount() {
        this.timer = setInterval(this.move, 2000);
    }
    handleOver = () => {//暂停
        clearInterval(this.timer);
    }
    handleOut = () => {//轮播
        this.timer = setInterval(this.move, 2000);
        // this.componentDidMount();
    }
    handleClick = (i) => {
        this.setState({
            index: i
        });
    }
    leftClick = () => {
        if (this.state.index == 0) {
            this.ul.ul.style.transitionDuration = '0s';
            this.ul.ul.style.left = -4000 + 'px';
            setTimeout(() => {
                this.ul.ul.style.transitionDuration = '1s';
                this.setState({
                    index: 4
                });
            }, 0);
            return;
        }
        this.setState({
            index: this.state.index - 1
        })
    }
    render() {
        return (
            <div className="wrap">
                <div className="box" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
                    <Slide ref={ul => this.ul = ul} imgs={this.props.imgs} index={this.state.index} />
                    <Dots imgs={this.props.imgs} index={this.state.index} handleClick={this.handleClick} />
                    <ul className="arrow">
                        <li className="arrow-left" onClick={this.leftClick}>&lt;</li>
                        <li className="arrow-right" onClick={this.move}>&gt;</li>
                    </ul>
                </div>
            </div>
        )
    }
}
