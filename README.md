# React && Redux 学习
### DOM事件
##### 创建button标签，绑定点击事件
```html
<p>Num : {this.state.num}</p>

<!-- 切记函数不能加()，否则页面加载就会触发函数 -->
<button onClick={this.handleClick}>点击</button>
```

##### 在组件内定义函数

```js
state = {
    num: 0
};

// 定义函数
handleClick = (e) =>{     // 使用箭头函数，函数内才可以访问到this
    // react修改state的值需要使用this.setState()
    this.setState(state => ({
        num: state.num + 1
    }))
};
```

##### 其他DOM事件
悬停事件
```js
handleMouseOver = (e) =>{
    console.log(e.pageX,e.pageY);
};
render(){
    return (
        <div className="app-content">
            <button onMouseOver={this.handleMouseOver}>悬停</button>
        </div>
    );
}
```
复制监听事件
```js
handleCopy = (e) =>{
    console.log("复制请标注出此！")
};
render(){
    return (
        <div className="app-content">
            <p onCopy={this.handleCopy}>Num : {this.state.num}</p>
        </div>
    );
}
```
