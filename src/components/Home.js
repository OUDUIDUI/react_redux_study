import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Home extends Component{
    render() {
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

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);