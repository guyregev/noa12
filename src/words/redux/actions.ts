import {ADD_WORD, Word} from "./types";

export const addWord = (word:string) => async (dispatch:any) => {
        dispatch({
                type: ADD_WORD,
                payload: {text:word, value:Math.round(Math.random()*100)},
        });
};

