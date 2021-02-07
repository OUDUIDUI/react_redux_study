import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const total = transactions
        .reduce((acc, transaction) => acc = acc + transaction.amount, 0)
        .toFixed(2);

    return (
        <div>
            <h4>你的余额</h4>
            <h1>￥{total}</h1>
        </div>
    )
}