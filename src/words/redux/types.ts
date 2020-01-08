export const ADD_WORD = 'ADD_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';

export interface Word {
    text: string;
    value: number;
}
export interface WordsDB {
    words:Array<Word>
}