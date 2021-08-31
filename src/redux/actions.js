import * as types from './actionTypes';
import axios from 'axios';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
});

const userAdded = () => ({
    type: types.ADD_USER
});

const userEditted = () => ({
    type: types.EDIT_USER
});

const userDeleted = () => ({
    type: types.DELETE_USER
});

const userFetched = (user) => ({
    type: types.FETCH_USER,
    payload: user
});

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((res) => {
            dispatch(getUsers(res.data));
        }).catch((error) => console.log(error))
    }
}


export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res) => {
            dispatch(userDeleted());
            dispatch(loadUsers());
        }).catch((error) => console.log(error))
    }
}

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user).then((res) => {
            dispatch(userAdded());
            dispatch(loadUsers());
        }).catch((error) => console.log(error))
    }
}

export const editUser = (id, user) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user).then((res) => {
            dispatch(userEditted());
            dispatch(loadUsers());
        }).catch((error) => console.log(error))
    }
}

export const fetchUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((res) => {
            console.log(res)
            dispatch(userFetched(res.data));
        }).catch((error) => console.log(error))
    }
}