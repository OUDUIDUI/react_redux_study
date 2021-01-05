import React , { createContext ,useReducer } from "react";
import {SongReducer} from "../reducers/SongReducer";

export const SongContext = createContext();

const SongContextProvider = (props) => {
    const [songs,dispath] = useReducer(SongReducer,[
        {title: '新世界 - 华晨宇', id: 1},
        {title: '好想爱这个世界啊 - 华晨宇', id: 2},
        {title: '斗牛 - 华晨宇', id: 3},
    ]);

    return (
        <SongContext.Provider value={{songs,dispath}}>
            {props.children}
        </SongContext.Provider>
    )
}

export default SongContextProvider;