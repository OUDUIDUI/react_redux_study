# React && Redux 学习
### 组件传递函数
##### 运行手脚架
安装配置
```shell
yarn install
```
运行项目
```shell
yarn start
```

##### 新建组件
在`src`路径下新建`AddContact.js`容器组件。
```js
import React, {Component} from 'react';

class AddContact extends Component{
    state = {};
    render() {
        return (
            <div></div>
        )
    }
}

export default AddContact;
```

然后在组件内插入表单以及相关事件。
```js
import React, {Component} from 'react';

class AddContact extends Component{
    state = {
        name: '',
        age: '',
        sex: ''
    };
    // 监听input修改
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    // 表单提交事件
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor= 'name'>Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor= 'name'>Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor= 'name'>Sex:</label>
                    <input type="text" id="sex" onChange={this.handleChange}/>
                    <button>提交表单</button>
                </form>
            </div>
        )
    }
}

export default AddContact;
```
##### 父级引入组件
```js
import React, {Component} from 'react';
import Contact from "./Contact";
import AddContact from "./AddContact"

class App extends Component{
    state = {
        contactForm: [
            {id: 1, name: 'OUDUIDUI', age: '24', sex: 'male'},
            {id: 2, name: 'Lucy', age: '23', sex: 'female'}
        ]
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello World</h1>
                </header>
                <Contact list={this.state.contactForm} />
                <AddContact />
            </div>
        );
    }
}

export default App;
```
##### 组件绑定函数
在父组件中，给组件`AddContact`绑定事件。
```html
<AddContact addContact={this.addContact}/>
```
并在父组件声明函数`addContact`，该函数有一个参数，由子组件传过来的。
```js
 addContact = (contact) => {
    console.log(contact);
}
```
##### 通过props访问绑定函数
在子组件`AddContact.js`中，我们可以通过`props`访问到前面绑定的事件。
```js
handleSubmit = (e) => {
    e.preventDefault();
    // 调用父组件的函数,并将子组件的state作为参数传过去
    this.props.addContact(this.state);
}
```

##### 处理数据
```js
 addContact = (contact) => {
    // 赋予id
    contact.id = Math.ceil(Math.random()*10000);
    // 通过解构创建新的数值，并插入新的值
    let contactForm = [...this.state.contactForm,contact];
    // 赋值给state
    this.setState({
        contactForm:contactForm
    })
}
```

##### 实现删除事件
先在父组件定义删除函数，并绑定给子组件`Contact.js`。
```js
deleteContact = (id) => {
    const contactForm = this.state.contactForm.filter(contact => {
        return contact.id !== id;
    })
    this.setState({
        contactForm:contactForm
    })
}
```
```html
<Contact list={this.state.contactForm} deleteContact={this.deleteContact} />
```

然后在子组件`Contact.js`中增加删除按钮，并且绑定事件。

为了防止自调用，所以使用`() => deleteContact(contact.id)`写法。
```js
const Contact = (props) => {
    // 获取列表
    const {list, deleteContact} = props;
    const newList = list.map(contact => {
        return (
            <div className="ContactFrom" key={contact.id}>
                <div>Name: { contact.name }</div>
                <div>Age: { contact.age }</div>
                <div>Sex: { contact.sex }</div>
                 <!-- 删除按钮 -->
                <button onClick={() => deleteContact(contact.id)}>删除</button>
            </div>
        )
    })
    return (
        <div className="list">
            {newList}
        </div>
    )
}

export default Contact;
```