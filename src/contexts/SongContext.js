import React , { createContext ,useReducer,useEffect } from "react";
import {SongReducer} from "../reducers/SongReducer";

export const SongContext = createContext();

const SongContextProvider = (props) => {
    const [songs,dispath] = useReducer(SongReducer,[],()=>{
        const res = localStorage.getItem('songs');
        return res ? JSON.parse(res) : [];
    });

    useEffect(() =>{
        localStorage.setItem('songs',JSON.stringify(songs));
    },[songs])

    return (
        <SongContext.Provider value={{songs,dispath}}>
            {props.children}
        </SongContext.Provider>
    )
}

export default SongContextProvider;