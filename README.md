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


##### useEffect使用
`useEffect`可用于组件的数据请求，模拟类组件的生命周期。
```js
// 初始化加载以及数据更新时会调用
useEffect(() => {
    console.log('useEffect函数运行中');
},[songs])  // 只要songs改变时才会调用
```