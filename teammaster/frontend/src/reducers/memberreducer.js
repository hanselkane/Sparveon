import { GET_MEMBERS, DELETE_MEMBERS, ADD_MEMBERS} from '../actions/types.js';

const initialState ={
    memberarray: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_MEMBERS:
            return{
                ...state,
                memberarray:action.payload
            }
            
        case DELETE_MEMBERS:
            return{
                ...state,
                memberarray:state.memberarray.filter(member=>member.id!==action.payload)
            }
        
        case ADD_MEMBERS:
            return {
                ...state,
                memberarray:[...state.memberarray,action.payload]
            };
        default:
            return state;
    }
}