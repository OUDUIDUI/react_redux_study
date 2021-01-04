# React && Redux 学习
### 多个Context上下文
##### 运行手脚架
安装配置
```shell script
yarn install
```
运行项目
```shell script
yarn start
```
##### 新建一个新的Context
在`contexts`路径下新建一个`AuthContext.js`。
```js
import React, {createContext, Component} from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    };
    toggleAuth = () => {
        this.setState({isAuthenticated: !this.state.isAuthenticated})
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;
```

##### 引入多个上下文
当存在多个上下文时，可使用嵌套引入。
```js
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeToggle from "./components/ThemeToggle";
import React from "react";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar/>
                    <BookList/>
                    <ThemeToggle />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
```

##### 获取多个上下文
当组件内获取多个上下文时，只能够使用`Consumer`方法进行获取。
```js
import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";

class Navbar extends Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const {isAuthenticated,toggleAuth} = authContext;
                    const {isLightTheme, light, dark} = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <nav style={{background: theme.ui, color: theme.syntax}}>
                            <h1>Context App</h1>
                            <div onClick={toggleAuth}>
                                {isAuthenticated ? '登录' : '登出'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}
                </ThemeContext.Consumer>
            ))}
            </AuthContext.Consumer>
        )
    }
}

export default Navbar;
```
