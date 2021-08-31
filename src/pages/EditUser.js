import React,{useState, useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {editUser, fetchUser} from '../redux/actions';
import { useParams } from 'react-router-dom';

const EditUser = () => {
    
    let dispatch = useDispatch();
    const { user } = useSelector(state => state.data);
    console.log(user)
    const [name, setName] = useState();
    const [age, setAge] = useState();
    let {id} = useParams();
    console.log(id)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(age);
        const obj = {
            name: name,
            age: age
        }
        dispatch(editUser(id, obj))
    }
    useEffect(()=> {
        dispatch(fetchUser(id))
    },[id]);
    useEffect(()=> {
        setName(user.name)
        setAge(user.age)
    }, [user])
    return (
        <div>
            Add user
            <form onSubmit={handleSubmit}>
                Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/><br/>
                Age: <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditUser
