# React && Redux 学习
### Redux基本使用
##### 运行手脚架
安装配置
```shell script
yarn install
```
运行项目
```shell script
yarn start
```
##### Redux介绍
- Redux是JavaScript状态容器，提供可预测化的状态管理
- 所有的组件都可以通过它来访问数据
- 使得应用程序状态管理更便捷

##### 引入CDN
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.min.js"
        integrity="sha512-P36ourTueX/PrXrD4Auc1kVLoTE7bkWrIrkaM0IG2X3Fd90LFgTRogpZzNBssay0XOXhrIgudf4wFeftdsPDiQ=="
        crossorigin="anonymous"></script>
```

##### 初始化state
```js
const initState = {
    todos: [],
    posts: []
}
```
##### 创建store
```js
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
```

##### 订阅store
```js
store.subscribe(() => {
    console.log('state已更新');
    console.log(store.getState());
})
```

##### 分派action
```js
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
```