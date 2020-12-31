const { createStore } = Redux;

// 初始化state
const initState = {
    todos: [],
    posts: []
}

// 创建reducer函数
function myReducer(state = initState,action){
    if(action.type === "ADD_POST"){
        return {
            ...state,
            posts: [...state.posts,action.post]
        }
    }
    if(action.type === "ADD_TODO"){
        return {
            ...state,
            todos: [...state.todos,action.todo]
        }
    }
}

// 创建store
const store = createStore(myReducer);

// 订阅store
store.subscribe(() => {
    console.log('state已更新');
    console.log(store.getState());
})

// 分派action
store.dispatch({
    type: "ADD_POST" ,      // 类型
    post: "我的第一篇博客",   // 内容
});
store.dispatch({
    type: "ADD_POST" ,
    post: "我的第二篇博客",
});
store.dispatch({
    type: "ADD_TODO" ,
    todo: "看书",
});