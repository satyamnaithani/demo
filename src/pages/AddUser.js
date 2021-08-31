import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/actions';
const AddUser = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [id, setId] = useState();
    let dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id: id,
            name: name,
            age: age
        }
        dispatch(addUser(obj))
    }
    return (
        <div>
            Edit user
            <form onSubmit={handleSubmit}>
                Id: <input type="number" value={id} onChange={(e) => setId(e.target.value)}/><br/>
                Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/><br/>
                Age: <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUser
