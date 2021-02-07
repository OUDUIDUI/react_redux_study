import React, {useState, useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const AddTransaction = () => {
    const {dispatch} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TRANSACTION',
            transaction: {
                id: (Math.random() * 100000000).toFixed(0),
                amount: +amount,
                text
            }
        });
        setText('');
        setAmount('');
    }

    return (
        <div>
            <h3>添加新交易</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">交易名称</label>
                    <input type="text" value={text}
                           onChange={(e) => setText(e.target.value)} placeholder="输入名称..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        金额<br/>
                        （支出-负数，输入-正数）
                    </label>
                    <input type="text" value={amount}
                           onChange={(e) => setAmount(e.target.value)} placeholder="输入金额..."/>
                </div>
                <button className="btn">添加新交易</button>
            </form>
        </div>
    )
}