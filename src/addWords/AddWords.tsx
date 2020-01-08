import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {addWord} from "../words/redux/actions";

export function AddWords() {
    const dispatch = useDispatch();
    const [word, setWord] = useState("");
    const nameInputEl: any = React.createRef();

    useEffect(() => {
        if (nameInputEl.current) {
            nameInputEl.current.focus();
        }
    });

    return(
        <div>
            <label>Enter a word</label>
            <input value={word} placeholder="תהיה יצירתי"
                   ref={nameInputEl}
                   onChange={(e) => {
                       const currentWord:string = nameInputEl.current.value;
                       setWord(currentWord)
                   }}
            />
            <button
                onClick={ () => {dispatch(addWord(word));  setWord('') }}>
                לך על זה
            </button>
        </div>

    );
}