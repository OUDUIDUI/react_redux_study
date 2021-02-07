export const AppReducer = (state, action) => {
    let newState;
    switch (action.type){
        case 'DELETE_TRANSACTION':
            newState = {
                ...state,
                transactions: state.transactions.filter( transaction => transaction.id !== action.id)
            };
            break;
        case 'ADD_TRANSACTION':
            newState = {
                ...state,
                transactions: [action.transaction, ...state.transactions]
            };
            break;
        default:
            newState = state;
            break;
    }
    localStorage.setItem('globalState',JSON.stringify(newState));
    return newState;
}