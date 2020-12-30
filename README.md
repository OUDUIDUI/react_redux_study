# React && Redux 学习
### 状态组件（容器组件）与无状态组件（UI组件）
##### 运行手脚架
安装配置
```shell
yarn install
```
运行项目
```shell
yarn start
```

##### 区别
**状态组件（容器组件）**
- 包含state状态
- 拥有生命周期钩子
- 不包含UI
- 使用类创建组件

**无状态组件（UI组件）**
- 不包含state状态
- 从props接收数据
- 只包含UI
- 使用函数创建组件