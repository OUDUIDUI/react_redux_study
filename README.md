# React && Redux 学习
### 数据逻辑处理
##### 运行手脚架
安装配置
```shell
yarn install
```
运行项目
```shell
yarn start
```

##### if条件语句
```js
    const newList = list.map(contact => {
        // 返回性别为男的数据
        if(contact.sex === 'male'){
            return (
                 <div className="ContactFrom" key={contact.id}>
                    <div>Name: { contact.name }</div>
                    <div>Age: { contact.age }</div>
                    <div>Sex: { contact.sex }</div>
                </div>
            )
        }
    })
```

##### 三元运算符
```js
    const newList = list.map(contact => {
        // 返回性别为男的数据
        return contact.sex === 'male' ? (
            <div className="ContactFrom" key={contact.id}>
                <div>Name: { contact.name }</div>
                <div>Age: { contact.age }</div>
                <div>Sex: { contact.sex }</div>
            </div>
        ) : null
    })
```

##### 其他写法（不推荐）
```js
<div className="list">
    {
        list.map(contact => {
            return contact.sex === 'male' ? (
                <div className="ContactFrom" key={contact.id}>
                    <div>Name: { contact.name }</div>
                    <div>Age: { contact.age }</div>
                    <div>Sex: { contact.sex }</div>
                </div>
            ) : null
        })
    }
</div>
```