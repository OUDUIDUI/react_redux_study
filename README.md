# React && Redux 学习
### 创建组件
##### 引入CDN
```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

##### 增加根标签
```html
<div id="app"></div>
```

##### 创建react组件
```html
<script type="text/babel">
    class App extends React.Component{
        render(){
            // JSX (只能有一个根标签)
            return (
                <div className="app-content">
                    <h1>Hello World!</h1>
                    <p>{Math.random()*10}</p>
                </div>
            );
        }
    }
</script>
```

##### 渲染虚拟DOM
```js
ReactDOM.render(<App />, document.getElementById('app'));
```