# React && Redux 学习
### LocalStorage
##### 运行手脚架
安装配置
```shell script
yarn install
```
运行项目
```shell script
yarn start
```

##### React中LocalStorage的应用
使用`useEffect`监听`songs`变化，并进行本地存储。
```js
useEffect(() =>{
        localStorage.setItem('songs',JSON.stringify(songs));
    },[songs])
```
通过`useReducer`第三个参数回调函数获取本地存储值。
```js
const [songs,dispath] = useReducer(SongReducer,[],()=>{
    const res = localStorage.getItem('songs');
    return res ? JSON.parse(res) : [];
});
```