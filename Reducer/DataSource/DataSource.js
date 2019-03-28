let comments = [
    { id: 1, msg: '第一条评论' },
    { id: 2, msg: '第二条评论' },
    { id: 3, msg: '第三条评论' }
];
let blogs = [
    { id: 1, msg: '第一条博客' },
    { id: 2, msg: '第二条博客' },
    { id: 3, msg: '第三条博客' }
];
var index = 4;
let listeners = [

];
let DataSource = {
    getComments() {
        return comments;
    },
    getBlogPost() {
        return blogs;
    },
    getBlogById(id) {//根据下标返回博客信息
        return blogs.find((item) => item.id == id);
    },
    addComment(data) {
        comments.push({
            id: index++,
            msg: data
        });
        DataSource.doListener();//更新this.state
    },
    addChangeListener(listener) {//订阅
        // console.log(listener);//this.setState()
        listeners.push(listener);
    },
    removeChangeListener(listener) {
        for (let i = 0; i < listeners.length; i++) {
            if (listener == listeners[i]) {
                listeners.splice(i, 1);
                break;
            }
        }
    },
    doListener() {
        listeners.forEach(item => {
            item();//this.setState()更新this.state
        });
    }
};
export default DataSource;