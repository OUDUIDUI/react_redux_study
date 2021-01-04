# React && Redux 学习
### React-Redux基本使用
##### 运行手脚架
安装配置
```shell script
yarn install
```
运行项目
```shell script
yarn start
```
##### 安装Redux
```shell
yarn add redux react-redux
```

##### 创建reducer
在`src`路径下创建`reducers`文件夹，然后在里面创建`rootReducer.js`。
```js
const initState = {
    // 存放博客
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }]
}

const rootReducer = (state = initState, action) => {
    if(action.type === "DELETE_POST"){
        // 删除博客
        let newPosts = state.posts.filter(post => {
            return post.id !== Number(action.id)
        })
        return {
            ...state,
            posts: newPosts
        }
    }

    return state;
}

export default rootReducer;
```

##### 引入redux
在`index.js`中引入redux。
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 引入redux
import {createStore} from "redux";
import {Provider} from "react-redux";
// 引入reducer
import rootReducer from "./reducers/rootReucer";

// 创建store
const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <!-- 引入store -->
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

##### 获取redux中的博客
在`Home.js`中获取`redux`中的博客。
```js
import React, {Component} from 'react';
import {Link} from "react-router-dom";
// 引入redux连接高级组件
import {connect} from "react-redux";

class Home extends Component{
    render() {
        // 从props中获取到posts
        const posts = this.props.posts;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
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

// 创建mapStateToProps函数
const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

// 使用高级组件链接redux
export default connect(mapStateToProps)(Home);
```

##### action生成器
在`src`路径下创建`actions`文件夹，存放actions生成器。
在里面创建`postActions.js`,专门处理博客动作。
```js
export const deletePost = (id) => {
    return{
        type: "DELETE_POST",
        id
    }
}
```

然后在`Post.js`中实现删除博客。
```js
import React, {Component} from 'react';
import {connect} from "react-redux";
// 引入博客action
import {deletePost} from "../actions/postActions"

class Post extends Component{
    // 删除动作
    handleClick = () => {
        this.props.deletePost(this.props.match.params.id);
        this.props.history.push('/');
    }
    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn red" onClick={this.handleClick}>删除</button>
                </div>
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

const mapStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.id;
    return{
        post : state.posts.find(post => post.id === Number(id))
    }
}

// 创建mapDispatchToProps函数
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

// 使用redux高级组件
export default connect(mapStateToProps,mapDispatchToProps)(Post);
```