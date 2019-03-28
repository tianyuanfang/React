import React, { Component } from 'react'
import store from './store';

export default class Todolist extends Component {
    constructor() {
        super();
        // this.state = store.getState();
        this.state = store.getState().todo;
        store.subscribe(() => {
            // this.setState(store.getState());
            this.setState(store.getState().todo);
        });
    }
    handleAdd = (e) => {
        if (e.keyCode == 13) {
            if (e.target.value != '') {
                store.dispatch({
                    type: 'add_item',
                    value: e.target.value
                });
            }
            e.target.value = '';
        }
    }
    handleDel = (index) => {
        // console.log(index);
        store.dispatch({
            type:'del_item',
            value:index
        });
    }
    render() {
        return (
            <div style={{ margin: '5px' }}>
                <input type="text" autoFocus onKeyDown={this.handleAdd} />
                <br />
                <ul>
                    {
                        this.state.list.map((item, index) => (

                            <li key={index}>
                                {item}
                                <button style={{margin:'5px'}} onClick={()=>this.handleDel(index)}>删除</button>
                            </li>

                        ))
                    }
                </ul>
            </div>
        )
    }
}
