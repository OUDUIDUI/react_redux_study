const Contact = (props) => {
    // 获取列表
    const {list} = props;
    const newList = list.map(contact => {
        return (
            <div className="ContactFrom" key={contact.id}>
                <div>Name: { contact.name }</div>
                <div>Age: { contact.age }</div>
                <div>Sex: { contact.sex }</div>
                <br/>
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