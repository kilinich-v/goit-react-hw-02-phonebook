import React, { Component } from 'react'
import styles from './styles.module.scss'

export class ContactsList extends Component {
    render() {
        const { contacts, deleteContact } = this.props;

        return (
            <ul className={styles.contacts}>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <li key={id} className={styles.contact}>
                            <span>{name}</span>
                            <span>{number}</span>
                            <button className={styles.button} onClick={() => deleteContact(id)}>X</button>
                        </li>
                    )
                })
                }
            </ul>
        )
    }
}

export default ContactsList
