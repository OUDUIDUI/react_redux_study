import React, {Component} from 'react';
import axios from 'axios';

class App extends Component{
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
