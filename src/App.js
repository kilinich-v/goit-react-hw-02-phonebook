import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddContactForm from './components/AddContactForm'
import Contacts from './components/Contacts'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addNewContact = data => {
    const { name, number } = data;

    const newContact = {
      id: uuidv4(),
      name: name,
      number: number
    }

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          newContact
        ]
      }
    })
  }

  changeFilter = ({ target }) => {
    const { value } = target;

    this.setState({ filter: value });
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { contacts, filter } = this.state;
    // const { feadback, title, buttons, button } = styles;

    const visebleContacts = contacts.filter(({ name, number }) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || number.includes(filter))

    return (
      <>
        <h1>Phonebook</h1>
        <div className="container">
          <AddContactForm onSubmit={this.addNewContact} />
          <Contacts contacts={visebleContacts} filter={filter} onChange={this.changeFilter} deleteContact={this.deleteContact} />
        </div>
      </>
    )
  }
}

export default App

