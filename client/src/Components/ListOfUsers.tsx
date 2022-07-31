import React from 'react';
import { GET_ALL_USERS } from '../Graphql/Queries';
import { DELETE_USER } from '../Graphql/Mutation';
import { useQuery, useMutation } from '@apollo/client';

function ListOfUsers() {
    const { data, loading } = useQuery(GET_ALL_USERS);

    const [deleteUser, { error }] = useMutation(DELETE_USER);

    if (data) {
        console.log(data);
    }

    return (
        <div>{data &&
            data.getAllUsers.map((user: any) => {
                return (
                    <div>
                        {user.name}
                        <button onClick={() => deleteUser({ variables: { id: user.id } })}>Deletar</button>
                    </div>
                )
            })}

        </div>
    )
}

export default ListOfUsers;