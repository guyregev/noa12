import React from 'react';
import { useSelector } from 'react-redux'
import WordCloud from 'react-d3-cloud';
import { AddWords }  from './addWords/AddWords'

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;
export function App() {

    const words = useSelector(
        (state) => {
            //Need to copy the array.
            //It seems that WordCloud manipulate the data prop
            const copyOfArray = JSON.parse(JSON.stringify(state.words.words));
            return copyOfArray;
        }
    );

    return(
        <>
            <AddWords></AddWords>
            <WordCloud
                data={words}
                fontSizeMapper={fontSizeMapper}
                rotate={rotate}
            />
        </>
    );
}