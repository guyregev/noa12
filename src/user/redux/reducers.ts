import {ADD_USER, ADD_WORD_TO_USER, REMOVE_USER, UserData, Users} from "./types";
import {AnyAction} from "redux";

const InitialState: Users = {
    users:[],
};

export const users = (state: Users = InitialState, action: AnyAction) => {
    switch (action.type) {
        case ADD_USER:
            const userData:UserData = {
                userId:action.payload.userId,
                words:[],
            }
            return {
                ...state,
                words: state.users.push(userData),
            };
            /*
        case REMOVE_USER:
            //GET USER index
            //remove user
            const index = state.words.indexOf(action.payload);
            return {
                ...state,
                words: state.users.splice(index),
            };
        case ADD_WORD_TO_USER:
            //GET USER DATA
            const index = state.words.indexOf(action.payload);
            return {
                ...state,
                words: state.words.splice(index),
            };

             */
        default:
            return state;
    }
};