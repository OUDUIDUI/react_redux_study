# React && Redux 学习
### 组件列表渲染
##### 运行手脚架
安装配置
```shell
yarn install
```
运行项目
```shell
yarn start
```

##### 将App.js修改为类组件
 `App.js`默认是函数式组件，因此没有`state`属性。
 
 如果我们需要在`App.js`使用到`state`属性，就得先将其修改为类组件。
 
 ```js
// 函数式组件
function App(){
    return (
        <div className="App">
            <h1>Hello World</h1>
        </div>
    );
}

export default App;
```
```js
// 类组件
import React, {Component} from 'react';

class App extends Component{
    state = {};
    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default App;

```
##### 创建列表
在`App.js`中`state`创建一个列表。
```js
state = {
    contactForm: [
        {id: 1, name: 'OUDUIDUI', age: '24', sex: 'male'},
        {id: 2, name: 'Lucy', age: '23', sex: 'female'}
    ]
};
```
然后将列表传给子组件`Contact`
```html
<Contact list={this.state.contactForm} />
```

##### 获取列表
在`Contact.js`中，通过`props`获取列表
```js
const {list} = this.props;
```
##### 渲染列表
通过ES6中数值方法`map`处理列表。
```js
const newList = list.map(contact => {
    return (
        <div className="ContactFrom" key={contact.id}>
            <div>Name: { contact.name }</div>
            <div>Age: { contact.age }</div>
            <div>Sex: { contact.sex }</div>
        </div>
    )
})
```
列表渲染需要赋予`key`值作为索引，否则会报错。

将`newList`渲染处理。
```html
<div className="list">
   {newList}
</div>
```