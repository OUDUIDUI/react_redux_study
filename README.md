# React && Redux 学习
### 引入css
##### 运行手脚架
安装配置
```shell
yarn install
```
运行项目
```shell
yarn start
```

##### 创建CSS文件
在`src`路径下创建`App.css`。
```css
body {
    background: skyblue;
    color: #fff;
    font-weight: bolder;
}
```

##### 引入CSS文件
在`App.js`引入。
```js
import "./App.css";
```

##### 局部使用
在CSS中都加上该组件根标签的类型做选择器。

`Contact.css`
```css
.list {
    margin-bottom: 20px;
}

.list .ContactFrom{
    display: flex;
    padding: 5px 0;
}

.list .ContactFrom div{
    margin-right: 20px;
}
```

##### 全局样式
`index.css`