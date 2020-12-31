# React && Redux 学习
### 页面参数
##### 运行手脚架
安装配置
```shell script
yarn install
```
运行项目
```shell script
yarn start
```
##### 创建两个页面组件
创建`Home.js`页面组件和`Post.js`页面组件。

`Home.js`
```js
import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component{
    state = {
        posts: [],
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data
                })
            })
    };
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">没有博客文章进行展示</div>
        )
        return (
            <div className="container">
                <h3 className="center">博客列表</h3>
                {postList}
            </div>
        );
    }
}

export default Home;

```
`Post.js`
```js
import React, {Component} from 'react';

class Post extends Component{
    render() {
        return (
            <div className="container">
                <h4>博客详情</h4>
            </div>
        );
    }
}

export default Post;
```

在`App.js`引入。

使用`Switch`去管理路由跳转，只会显示第一个匹配到的路由页面。
```js
import React, {Component} from 'react';
import {Route,BrowserRouter,Switch} from "react-router-dom";

import Home from "./components/Home";
import Post from "./components/Post";

class App extends Component{
    state = {
        posts: [],
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/:id" component={Post} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
```

##### 点击跳转
在`Home.js`设置点击博客标题带参跳转。

引入`Link`。
```js
import {Link} from "react-router-dom";
```

设置跳转。
```html
<Link to={'/' + post.id}>
    <span className="card-title">{post.title}</span>
</Link>
```

##### 获取页面参数请求博客信息
通过页面`props`获取到页面参数。
```js
import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component{
    state = {
        post: ''
    }
    componentDidMount() {
        // 获取页面参数
        const id = this.props.match.params.id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                console.log(res);
                this.setState({
                    post: res.data
                })
            })
    }
    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">文章正在加载……</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        );
    }
}

export default Post;

```