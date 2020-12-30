import React, {Component} from 'react';

class AddContact extends Component{
    state = {
        name: '',
        age: '',
        sex: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        // 调用父组件的函数
        this.props.addContact(this.state);
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