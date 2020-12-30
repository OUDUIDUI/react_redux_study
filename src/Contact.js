// 无状态组件 函数组件
const Contact = (props) => {
    // 获取列表
    const {list} = props;
    const newList = list.map(contact => {
        // if条件语句
        // if(contact.sex === 'male'){
        //     return (
        //         <div className="ContactFrom" key={contact.id}>
        //             <div>Name: { contact.name }</div>
        //             <div>Age: { contact.age }</div>
        //             <div>Sex: { contact.sex }</div>
        //         </div>
        //     )
        // }

        // 三元运算符
        return contact.sex === 'male' ? (
            <div className="ContactFrom" key={contact.id}>
                <div>Name: { contact.name }</div>
                <div>Age: { contact.age }</div>
                <div>Sex: { contact.sex }</div>
            </div>
        ) : null
    })
    return (
        <div className="list">
            {/*{newList}*/}
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
    )
}

export default Contact;