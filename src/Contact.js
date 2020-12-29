// 引入React和Component
import React, {Component} from 'react';

class Contact extends Component {
    render() {
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