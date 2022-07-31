import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USER } from "../Graphql/Mutation";

export const CreateUser = () => {
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [createUser, { error }] = useMutation(CREATE_USER);
    return (
        <div className='createUser'>
            <input type={'text'} placeholder="nome" onChange={(e) => { setName(e.target.value) }} />
            <input type={'text'} placeholder="username" onChange={(e) => { setUser(e.target.value) }} />
            <input type={'text'} placeholder="senha" onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={() => {
                createUser({
                    variables: { name: name, username: user, password: password }
                });
            }}>Criar Usuário</button>
        </div>
    )
}