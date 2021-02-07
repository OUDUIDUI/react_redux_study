import React, {createContext, useReducer} from 'react';
import {AppReducer} from "../reducers/AppReducer"

const localStorageData = localStorage.getItem('globalState');

const initialState = localStorageData ? JSON.parse(localStorageData) : {transactions: []};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={{transactions: state.transactions, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}