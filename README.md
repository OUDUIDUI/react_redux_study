# React && Redux 学习
### React路由
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

##### 安装ReactRouterDom
```shell script
yarn add react-router-dom
```

##### 新建页面
先在`src`路径下新建`components`文件夹，然后分别在里面创建三个页面组件`Home.js`、`About.js`、`Contact.js`。

`Home.js`
```js
import React from "react";

const Home = () => {
    return (
        <div>
            <div className="container">
                <h3 className="center">Home页面</h3>
                <p>Hello World!</p>
            </div>
        </div>
    )
}

export default Home;
```
`About.js`
```js
import React from "react";

const About = () => {
    return (
        <div>
            <div className="container">
                <h3 className="center">About页面</h3>
                <p>关于OUDUIDUI</p>
            </div>
        </div>
    )
}

export default About;
```
`Contact.js`
```js
import React from "react";

const Contact = () => {
    return (
        <div>
            <div className="container">
                <h3 className="center">Content页面</h3>
                <p>联系我们：xxx-xxxxxxxx</p>
            </div>
        </div>
    )
}

export default Contact;
```
##### 创建导航组件
同样在`components`路径下新建`Navbar.js`。
```js
import React from "react";
// 引入Link, NavLink
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
       <nav className="nav-wrapper red darken-3">
           <div className="container">
               <a href="/" className="brand-logo">OUDUIDUI</a>
               <ul className="right">
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/About">About</NavLink></li>
                   <li><NavLink to="/Contact">Contact</NavLink></li>
               </ul>
           </div>
       </nav>
    )
}

export default Navbar;
```
`NavLink`是`Link`的一个特定版本，会在匹配上的元素添加参数：
- **activeClassName** (string) : 设置选中class。默认为`active`
- **activeStyle** (object) : 当元素被选中时，为此元素添加样式
- **isActive** (function) : 判断链接是否激活的额外逻辑功能
- **strict** (boolean) : 为`true`时，在确定位置是否与当前URL匹配时，将考虑位置`pathName`后的`/`
- **exact** (boolean) : 为`true`时，只有完全匹配时，`class`和`style`才有效。

##### 引入导航组件和页面组件
```js
import React, {Component} from 'react';
// 引入路由
import {Route, BrowserRouter} from  "react-router-dom"

// 引入组件
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from  "./components/About";
import Contact from "./components/Contact";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <!-- exact —— 精准匹配 -->
                    <Route exact path="/" component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Contact" component={Contact}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
```

##### 函数式路由重定向
像`Home.js`、`About.js`、`Contact.js`的页面组件，它们的`props`里会带有路由对象，因此我们可以直接调用里面的方法进行页面重定向。
```js
import React from "react";

const Home = (props) => {
    const toAboutPage = () => {
        // 跳转到About页面
        props.history.push('/About');
    }
    return (
        <div>
            <div className="container">
                <h3 className="center">Home页面</h3>
                <p>Hello World!</p>
                <!-- 跳转About页面的button -->
                <button onClick={toAboutPage}>关于OUDUIDUI</button>
            </div>
        </div>
    )
}

export default Home;
```
而像`Navbar.js`这样的非页面组件，可引入`withRouter`,从而使得`props`也带有路由对象。
```js
import React from "react";
// 引入withRouter
import {Link, NavLink, withRouter} from "react-router-dom";

const Navbar = (props) => {
    // 跳转主页
    const toHomePage = () => {
        props.history.push('/');
    };
    return (
       <nav className="nav-wrapper red darken-3">
           <div className="container">
                <!-- 点击LOGO跳转主页 -->
               <div className="brand-logo" onClick={toHomePage}>OUDUIDUI</div>
               <ul className="right">
                   <li><Link to="/">Home</Link></li>
                   <li><NavLink to="/About">About</NavLink></li>
                   <li><Link to="">Contact</Link></li>
               </ul>
           </div>
       </nav>
    )
}

// 使用withRouter进行导出
export default withRouter(Navbar);
```