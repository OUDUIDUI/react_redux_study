import React, {useState} from 'react';
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
    // 初始化state值
    const [color, setColor] = useState('');
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);

    // 提交事件
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // 获取颜色组
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        }catch (e){
            console.log(e);
            setError(true);
        }
    }
    return (
        //  React.Fragment
        <>
            <section className="container">
                <h3>颜色生成器</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="#f15025"
                           className={`${error ? 'error' : null}`}
                           onChange={(e) => setColor(e.target.value)}/>
                    <button type="submit" className="btn">提交</button>
                </form>
            </section>
            <section className="colors">
                {list.map((color,index) => {
                    return (
                        <SingleColor color={color} index={index} key={index} />
                    )
                })}
            </section>
        </>
    );
}

export default App;
