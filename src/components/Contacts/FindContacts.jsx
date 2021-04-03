import React, { Component } from 'react'
import styles from './styles.module.scss'

export class FindContacts extends Component {
    render() {
        const { filter, handleFilter } = this.props;

        return (
            <div>
                <h3>Find contacts by name</h3>
                <input
                    type="text"
                    name="query"
                    value={filter}
                    required
                    onInput={handleFilter}
                    className={styles.input}
                    autoComplete="off"
                />
            </div>
        )
    }
}

export default FindContacts
