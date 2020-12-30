# React && Redux 学习
### 高阶组件（Higher Order Components）
##### 运行手脚架
安装配置
```shell script
yarn install
```
运行项目
```shell script
yarn start
```
##### 引入MaterializeCSS库
在`public/index.html`引入css库。
> [materializecss](https://materializecss.com/getting-started.html)
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

##### 新建高阶组件
在`src`中新建`hoc`文件夹，然后新建一个`Rainbow.js`高阶组件，用于控制组件文本格式。
```js
import React from "react";

// 高阶组件其实一个函数，所以使用函数式组件
const Rainbow = (WrappedComponent) => {
    // 随机出一个字体样式的类
    const colors = ["red","blue","green","orange","yellow","pink"];
    const randomColors = colors[Math.floor(Math.random()*6)];
    const className = randomColors + '-text';

    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Rainbow
```

##### 引入高阶组件
在`Home.js`引入高阶组件。
```js
import React from "react";
// 引入高阶组件
import Rainbow from "../hoc/Rainbow"

const Home = (props) => {
    const toAboutPage = () => {
        props.history.push('/About');
    }
    return (
        <div>
            <div className="container">
                <h3 className="center">Home页面</h3>
                <p>Hello World!</p>
                <button onClick={toAboutPage}>关于OUDUIDUI</button>
            </div>
        </div>
    )
}

// 使用高阶组件进行导出
export default Rainbow(Home);
```
