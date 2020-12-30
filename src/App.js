import React, {Component} from 'react';
import Contact from "./Contact";

// 状态组件 类组件
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
            </div>
        );
    }
}

export default App;
