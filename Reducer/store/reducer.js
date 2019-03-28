import {combineReducers} from 'redux';

let counter=(state=0,action)=>{
    switch(action.type){
        case 'add':
            return state+1;
        case 'del':
            return state-1;
        default:
            return state;
    }
}

let initValue = {
    num: 0,
    list: [1, 2, 3]
};
let  todo=(state = initValue, action) => {//state是初始状态，不能改变
    let newState = JSON.parse(JSON.stringify(state));//深拷贝（指向不同state）
    //直接赋值指向同一个state，是浅拷贝，但state是只读的，不能修改
    // let obj=Object.assign({},state,{num:100});//深拷贝并修改
    switch (action.type) {
        // case 'add':
        //     newState.num += action.value;
        //     return newState;
        // case 'del':
        //     newState.num -= 1;
        //     return newState;
        case 'add_item':
            newState.list.push(action.value);
            return newState;
        case 'del_item':
            newState.list.splice(action.value,1);
            return newState;
        default:
            return state;
    }
}

export default combineReducers({counter,todo});
