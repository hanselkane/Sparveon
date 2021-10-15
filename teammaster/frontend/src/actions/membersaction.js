import axios from 'axios';
import { createMessage, returnErrors } from './messagesaction';
import { GET_MEMBERS, DELETE_MEMBERS, ADD_MEMBERS } from './types'; 
// import {createMessage, returnErrors} from './messages';

export const getMembers = () =>dispatch =>{
    axios
        .get("/api/members/")
        .then(res =>{
            dispatch({
                type:GET_MEMBERS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

export const deleteMembers = (id) =>dispatch =>{
    axios
        .delete(`/api/members/${id}/`)
        .then(res =>{
            dispatch(createMessage({memberDeleted: "Member Deleted"}))
            dispatch({
                type:DELETE_MEMBERS,
                payload: id
            });
        })
        .catch(err => console.log(err))
};

export const addMembers = (member) => (dispatch,getState)=>{
    axios
        .post('/api/members/',member)
        .then((res) => {
            dispatch(createMessage({memberAdded: "Member Added"}))
            dispatch({
                type:ADD_MEMBERS,
                payload:res.data,
            });
        })
        .catch(err=>
            dispatch(returnErrors(err.response.data, err.response.status))
)}