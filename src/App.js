import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Posts} from "./components/Posts";
import {Pagination} from "./components/Pagination";

function App() {
    // 博客
    const [posts, setPosts] = useState([]);
    // 加载提醒
    const [loading, setLoading] = useState(false);
    // 当前页
    const [currentPage, setCurrentPage] = useState(1);
    // 每一页显示的博客数
    const [postsPerPage, setPostsPerPage] = useState(10);

    // 请求数据
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPost();
    }, [])

    // 获取当前显示的Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">我的博客</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} setCurrentPage={setCurrentPage}  />
        </div>
    );
}

export default App;
