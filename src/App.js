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
