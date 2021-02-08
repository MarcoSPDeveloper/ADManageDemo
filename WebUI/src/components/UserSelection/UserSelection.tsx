import axios from 'axios';
import React, { Component, useState, useEffect } from 'react'

import Table from 'react-bootstrap//Table';
import Form from 'react-bootstrap/Form';
import IUserResponsePayload from '../../api/IUserResponsePayload';

interface UserSelectionProps {
    onUserChange: (selectedUser: IUserResponsePayload) => void;
};

function UserSelection(props: UserSelectionProps) {

    const [users, setUsers] = useState<Array<IUserResponsePayload>>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);


    useEffect(() => {

        if (isLoaded == false) {
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then(response => {
                    console.log(response);
                    setIsLoaded(true);
                    setUsers(response.data);
                })
        }
    })

    return (

        <div className="card">
            <div className="card-header">
                Benutzerauswahl
        </div>
            <div className="card-body form-check">
                <Table striped hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                <Form.Check
                                    type="radio"
                                    defaultValue="false" disabled
                                />
                            </th>
                            {['Account', 'UPN', 'Vorname', 'Nachname'].map((col, index) => (
                                <th key={`th-${index}`} style={{ whiteSpace: 'nowrap' }}>
                                    {`${col} `}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {
                            users.map(user =>
                                <tr key={user.id}>
                                                 <td>
                                        {(
                                    <Form.Check type="radio" name="UserSelection" defaultValue="false" onClick={() =>props.onUserChange(user)} />)}
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                </tr>
                            )
                        }                       
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default UserSelection;