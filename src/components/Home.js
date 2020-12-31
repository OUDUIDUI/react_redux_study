import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

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

export default Home;
