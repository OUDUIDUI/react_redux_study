import React, {Component} from 'react';

class App extends Component{
    state = {
        num: 0
    };
    addNum = () =>{
        const newNum = this.state.num + 1;
        this.setState({
            num : newNum
        })
    };

    componentDidMount() {
        console.log('挂载完成!');
    };
    componentDidUpdate(prevProps, prevState) {
        console.log("更新完成");
        console.log(prevProps);
        console.log(prevState);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello World</h1>
                    <p>{this.state.num}</p>
                    <button onClick={this.addNum}>Add</button>
                </header>
            </div>
        );
    }
}

export default App;
