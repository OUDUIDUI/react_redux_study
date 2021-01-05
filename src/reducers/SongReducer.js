import {v4 as uuidv4} from "uuid";

export const SongReducer = (state, action) => {
    switch (action.type){
        case "ADD_SONG":
            return [...state,{title: action.title, id: uuidv4()}];
        case "REMOVE_SONG":
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
}