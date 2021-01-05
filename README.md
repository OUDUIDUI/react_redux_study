# React && Redux 学习
### React Hooks —— useReducer
##### 运行手脚架
安装配置
```shell script
yarn install
```
运行项目
```shell script
yarn start
```

##### useReducer使用
新建`SongReducers.js`。
```js
import {v4 as uuidv4} from "uuid";

export const SongReducer = (state, action) => {
    switch (action.type){
        // 添加歌曲
        case "ADD_SONG":
            return [...state,{title: action.title, id: uuidv4()}];
        // 删除歌曲
        case "REMOVE_SONG":
            return state.filter(book => book.id !== action.id);
        // 其他情况
        default:
            return state;
    }
}
```
在上下文使用`useRducer`。
```js
import React , { createContext ,useReducer } from "react";
import {SongReducer} from "../reducers/SongReducer";

export const SongContext = createContext();

const SongContextProvider = (props) => {
    const [songs,dispath] = useReducer(SongReducer,[
        {title: '新世界 - 华晨宇', id: 1},
        {title: '好想爱这个世界啊 - 华晨宇', id: 2},
        {title: '斗牛 - 华晨宇', id: 3},
    ]);

    return (
        <SongContext.Provider value={{songs,dispath}}>
            {props.children}
        </SongContext.Provider>
    )
}

export default SongContextProvider;
```

调用负载。
```js
const {dispath} = useContext(SongContext);
// 添加
dispath({type:'ADD_SONG',title})
// 删除
dispath({type:'REMOVE_SONG',id:song.id})
```