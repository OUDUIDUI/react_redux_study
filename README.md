# React && Redux 学习
### Context API
##### 运行手脚架
安装配置
```shell script
yarn install
```
运行项目
```shell script
yarn start
```
##### React Context API
`React Context API` 是针对所谓状态管理（state management）而设计的API。

`Context API`以一种更直接有效的方式解决了早期使用`props`来处理嵌套UI的状态共享的问题。

##### 创建Context
在`src`路径下新建`contexts`文件夹，然后在文件夹内创建`ThemeContext.js`。
```js
import React, {createContext, Component} from "react";

// 创建主题UI的上下文
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {bg: '#eee', ui: "#ddd", syntax: "#555"},
        dark: {bg: '#555', ui: "#333", syntax: "#ddd"},
    };

    render() {
        return (
            // 将state的值返回出去
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;
```

##### 引入Context
在`App.js`中进行引入。
```js
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Navbar/>
                <BookList />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
```

##### 在组件获取Context
有两种方法可以获取Context上下文，一种是`ContextType`方法，一种是`Consumer`方法。
- `ContextType`方法仅适用于类组件，而不能用于UI组件
- `Consumer`方法适用于任何组件

**`ContextType`方法**
```js
import React, {Component} from 'react';
// 引入ThemeContext
import {ThemeContext} from "../contexts/ThemeContext";

class Navbar extends Component {
    // 获取ThemeContext
    static contextType = ThemeContext;

    render() {
        // 通过this.context获取
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{background: theme.ui, color: theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
```
**`Consumer`方法**
```js
import React, {Component} from 'react';
// 引入ThemeContext
import {ThemeContext} from "../contexts/ThemeContext";

class BookList extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const {isLightTheme, light, dark} = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
                        <ul>
                            <li style={{background: theme.ui}}>《撒哈拉的故事》</li>
                            <li style={{background: theme.ui}}>《梦里花落知多少》</li>
                            <li style={{background: theme.ui}}>《雨季不再来》</li>
                        </ul>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        )
    }
}

export default BookList;
```

##### 修改Context上下文的值
在`ThemeContext.js`中创建修改值的函数。
```js
import React, {createContext, Component} from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {bg: '#eee', ui: "#ddd", syntax: "#555"},
        dark: {bg: '#555', ui: "#333", syntax: "#ddd"},
    };
    // 修改isLightTheme
    toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        })
    }
    render() {
        return (
            // 将toggleTheme一同导出
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;
```

然后新建一个`ThemeToggle`组件。
```js
import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

class ThemeToggle extends Component {
    // 获取ThemeContext
    static contextType = ThemeContext;

    render() {
        // 获取toggleTheme函数
        const {toggleTheme} = this.context;
        return (
            <button onClick={toggleTheme}>切换主题样式</button>
        )
    }
}

export default ThemeToggle;
```

将`ThemeToggle`组件引入页面。
```js
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import React from "react";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Navbar/>
                <BookList/>
                <ThemeToggle />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
```