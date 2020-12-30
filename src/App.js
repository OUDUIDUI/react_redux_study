import React, {Component} from 'react';
import Contact from "./Contact";
import AddContact from "./AddContact"

class App extends Component{
    state = {
        contactForm: [
            {id: 1, name: 'OUDUIDUI', age: '24', sex: 'male'},
            {id: 2, name: 'Lucy', age: '23', sex: 'female'}
        ]
    };
    // 增加
    addContact = (contact) => {
        contact.id = Math.ceil(Math.random()*10000);
        let contactForm = [...this.state.contactForm,contact];
        this.setState({
            contactForm:contactForm
        })
    }
    // 删除
    deleteContact = (id) => {
        const contactForm = this.state.contactForm.filter(contact => {
            return contact.id !== id;
        })
        this.setState({
            contactForm:contactForm
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello World</h1>
                </header>
                <Contact list={this.state.contactForm} deleteContact={this.deleteContact} />
                <AddContact addContact={this.addContact}/>
            </div>
        );
    }
}

export default App;
