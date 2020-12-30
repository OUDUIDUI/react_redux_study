import React from "react";
import "./Contact.css";

const Contact = (props) => {
    // 获取列表
    const {list, deleteContact} = props;
    const newList = list.map(contact => {
        return (
            <div className="ContactFrom" key={contact.id}>
                <div>Name: { contact.name }</div>
                <div>Age: { contact.age }</div>
                <div>Sex: { contact.sex }</div>
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