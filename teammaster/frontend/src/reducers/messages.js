import { GET_MESSAGES, CREATE_MESSAGES } from "../actions/types";

const initialState = {
    msg: {},
    status: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_MESSAGES:
            return (state = action.payload)
        
        default:
            return state;
    }
}