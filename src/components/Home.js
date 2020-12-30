import React from "react";

const Home = (props) => {
    const toAboutPage = () => {
        props.history.push('/About');
    }
    return (
        <div>
            <div className="container">
                <h3 className="center">Home页面</h3>
                <p>Hello World!</p>
                <button onClick={toAboutPage}>关于OUDUIDUI</button>
            </div>
        </div>
    )
}

export default Home;

