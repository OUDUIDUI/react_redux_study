# React && Redux 学习
### 表单事件
##### 创建表单
```html
<div className="app-content">
    <h1>My name is {this.state.name}.</h1>

    <!-- 表单绑定提交事件 -->
    <form onSubmit={this.handleSubmit}>
        <!-- 输入框绑定修改监听事件 -->
        <input type="text" onChange={this.handleChange} />
        <button>提交</button>
    </form>
</div>
```

##### 定义函数

```js
state = {
    name: "OUDUIDUI"
};
handleChange = (e) =>{
    this.setState({
        name : e.target.value
    })
}
handleSubmit = (e) =>{
    // 取消表单提交刷新事件
    e.preventDefault();
    console.log('the Name of Form Submitting：' + this.state.name);
}
```
