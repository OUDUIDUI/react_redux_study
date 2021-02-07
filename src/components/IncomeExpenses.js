import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const income = transactions
        .reduce((acc, transaction) => transaction.amount >= 0 ? acc + transaction.amount : acc, 0)
        .toFixed(2);
    const expense = Math.abs(transactions
        .reduce((acc, transaction) => transaction.amount <= 0 ? acc + transaction.amount : acc, 0))
        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>收入</h4>
                <p className="plus money">+￥{income}</p>
            </div>
            <div>
                <h4>支出</h4>
                <p className="minus money">-￥{expense}</p>
            </div>
        </div>
    )
}