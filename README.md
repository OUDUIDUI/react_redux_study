# React && Redux 学习
### axios
##### 运行手脚架
安装配置
```shell script
yarn install
```
运行项目
```shell script
yarn start
```
##### 安装axios
```shell script
yarn add axios
```

##### 使用axios
```js
import React, {Component} from 'react';
// 引入axios
import axios from 'axios';

class App extends Component{
    state = {
        posts: [],
    }
    // 在componentDidMount生命周期进行数据请求
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
            console.log(res);
            // 将请求到的数据进行复制给state.post
            this.setState({
                posts: res.data
            })
        })
    }
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
            <div className="App container">
                {postList}
            </div>
        );
    }
}

export default App;
```