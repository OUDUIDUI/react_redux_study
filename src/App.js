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
    addContact = (contact) => {
        contact.id = this.state.contactForm.length + 1;
        let contactForm = [...this.state.contactForm,contact];
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
                <Contact list={this.state.contactForm} />
                <AddContact addContact={this.addContact}/>
            </div>
        );
    }
}

export default App;
