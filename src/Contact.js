// 无状态组件 函数组件
const Contact = (props) => {
    // 获取列表
    const {list} = props;
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

export default Contact;