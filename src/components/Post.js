import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component{
    state = {
        post: ''
    }
    componentDidMount() {
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
