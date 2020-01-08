export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const ADD_WORD_TO_USER = 'ADD_WORD_TO_USER';

export interface UserData {
    userId:string;
    words:Array<String>;
}

export interface Users {
    users:Array<UserData>;

}



