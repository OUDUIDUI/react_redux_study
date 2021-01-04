# React && Redux 学习
### React Hooks —— useState
##### 运行手脚架
安装配置
```shell script
yarn install
```
运行项目
```shell script
yarn start
```

##### React Hooks
`React Hooks`是v16.8版本引入的全新API。

`React Hooks`的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码引进来。`React Hooks`就是那些钩子。

- 特殊的函数
- 允许我们在函数组件内部做一些额外的操作，例如使用`State`

**常用钩子**
- **useState()** : 状态钩子，用于为函数组件引入状态(state)
- **useEffect()** : 副作用钩子，用于引入具有副作用的操作，最常见的就是向服务器请求数据
- **useContext()** : 共享状态钩子， 用于组件之间共享状态


##### useContext使用
```js
import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

const BookList = () => {
    // 使用useContext获取上下文的值
    const {isLightTheme, light, dark} = useContext(ThemeContext);
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
}

export default BookList;
```

##### 同时获取多个上下文
```js
import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";

const Navbar = () => {
    const {isAuthenticated,toggleAuth} = useContext(AuthContext);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return(
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
}

export default Navbar;
```


##### 函数式上下文
```js
import React, {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated)
    }
    return (
        <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
```