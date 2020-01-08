import {ADD_WORD, REMOVE_WORD, WordsDB} from "./types";
import { AnyAction } from 'redux';

const InitialState: WordsDB = {
    words:[
        { text: 'Hey', value: 1000 },
        { text: 'lol', value: 200 },
        { text: 'first impression', value: 800 },
        { text: 'very cool', value: 1000000 },
        { text: 'duck', value: 10 },
    ]
};

export const words = (state: WordsDB = InitialState, action: AnyAction) => {
    switch (action.type) {
        case ADD_WORD:
            return {
                ...state,
                words: state.words.concat(action.payload),
            };
        case REMOVE_WORD:
            const index = state.words.indexOf(action.payload);
            return {
                ...state,
                words: state.words.splice(index),
            };
        default:
            return state;
    }
};
