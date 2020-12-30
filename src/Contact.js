// 引入React和Component
import React, {Component} from 'react';

class Contact extends Component {
    render() {
        // 获取列表
        const {list} = this.props;
        const newList = list.map(contact => {
            return (
                <div className="ContactFrom" key={contact.id}>
                    <div>Name: { contact.name }</div>
                    <div>Age: { contact.age }</div>
                    <div>Sex: { contact.sex }</div>
                </div>
            )
        })
        return (
           <div className="list">
               {newList}
           </div>
        )
    }
}

export default Contact;