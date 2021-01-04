import React, {Component} from 'react';
import {connect} from "react-redux";
import {deletePost} from "../actions/postActions"

class Post extends Component{
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

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);
