# React && Redux 学习
### 组件嵌套与通讯
##### 运行手脚架
安装配置
```shell
yarn install
```
运行项目
```shell
yarn start
```

##### 创建组件
在`src`路径下新建`Contact.js`文件作为组件。
```js
// 引入React和Component
import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="ContactFrom">
                <div>Name: OUDUIDUI</div>
                <div>Age: 24</div>
                <div>Sex: Male</div>
            </div>
        )
    }
}

// 导出组件
export default Contact;
```

##### 引入组件
在`App.js`引入`Contact.js`组件
```js
// 引入组件
import Contact from "./Contact";

function App() {
    return (
        <div className="App">
            <!-- 使用组件 -->
            <Contact />
        </div>
    );
}

export default App;
```

##### 组件传值
在`App.js`给`Contact.js`组件绑定参数
```html
<Contact name="OUDUIDUI" age="32" sex="male"/>
```
在`Contact.js`组件里通过`props`获取
```js
import React, {Component} from 'react';

class Contact extends Component {
    render() {
        // 使用es6语法获取props值
        const {name, age, sex} = this.props;
        return (
            <div className="ContactFrom">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Sex: { sex }</div>
            </div>
        )
    }
}

export default Contact;
```