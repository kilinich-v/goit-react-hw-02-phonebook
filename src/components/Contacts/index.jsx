import { Component } from 'react'
import PropTypes from 'prop-types'
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

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired
}

export default Contacts

