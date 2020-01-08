import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {addWord} from "../words/redux/actions";
import Button from '@material-ui/core/Button';
import Input from "@material-ui/core/Input";


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

            <Input  id="standard-basic"
                    inputRef={nameInputEl}
                    defaultValue={word}
                       onChange={(e) => {
                           const currentWord:string = nameInputEl.current.value;
                           setWord(e.target.value)
                       }} />
            <Button variant="outlined" color="primary"
                onClick={ () => {dispatch(addWord(word));  setWord('') }}>
                לך על זה
            </Button>
        </div>

    );
}
