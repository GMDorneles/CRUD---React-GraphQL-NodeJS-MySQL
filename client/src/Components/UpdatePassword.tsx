import React, { useState } from 'react'
import { UPDATE_PASSWORD } from '../Graphql/Mutation';
import { useMutation } from '@apollo/client';

function UpdatePassword() {
    const [username, setUsername] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

    return (
        <div>
            <input type={'text'} placeholder="user" onChange={(e) => setUsername(e.target.value)} />
            <input type={'text'} placeholder="oldPassword" onChange={(e) => setOldPassword(e.target.value)} />
            <input type={'text'} placeholder="newPassword" onChange={(e) => setNewPassword(e.target.value)} />
            <button onClick={() => updatePassword({ variables: { username: username, oldPassword: oldPassword, newPassword: newPassword } })}>Alterar senha</button>
        </div>
    )
}

export default UpdatePassword