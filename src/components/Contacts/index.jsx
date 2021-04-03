import React, { Component } from 'react'
import FindContacts from './FindContacts'
import ContactsList from './ContactsList'


export class Contacts extends Component {
    render() {
        const { contacts, filter, onChange, deleteContact } = this.props;

        return (
            <div>
                <h2>Contacts</h2>
                <FindContacts filter={filter} handleFilter={onChange} />
                <ContactsList contacts={contacts} deleteContact={deleteContact} />
            </div>
        )
    }
}

export default Contacts

