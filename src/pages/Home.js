import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loadUsers, deleteUser} from '../redux/actions';
import { useHistory } from 'react-router-dom';

const Home = () => {
    let dispatch = useDispatch();
    const {users} = useSelector(state => state.data)
    
    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }

    
    useEffect(() => {
        dispatch(loadUsers())
    }, []);
    let history = useHistory();
    return (
        <div>
            Home
            <button onClick={() => history.push('/addUser')}>Add User</button>
            <table>
            <thead>
            <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
                {users.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td><button onClick={() => handleDelete(data.id)}>Delete</button></td>
                            <td><button onClick={() => history.push(`/editUser/${data.id}`)}>Edit</button></td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    )
}

export default Home
