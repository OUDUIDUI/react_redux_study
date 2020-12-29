# React && Redux 学习
### state状态
##### 在组件内引入state
```js
state = {
    name: 'OUDUIDUI',
    age: 24
};
```

##### 渲染state数据
```js
render(){
    return (
        <div className="app-content">
            <h1>Hello World!</h1>
            <p>My name is {this.state.name},and my age is {this.state.age}.</p>
        </div>
    );
}
```