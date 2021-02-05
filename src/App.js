import React,{useState,useEffect} from 'react';
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = 'https://course-api.com/react-tours-project';

function App() {
    // 初始化状态
    const [tours,setTours] = useState([]);
    const [loading,setLoading] = useState(true);

    // 请求数据
    const fetchTours = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const tours = await res.json();
            setLoading(false);
            setTours(tours);
        }catch (e){
            console.log(e);
            setLoading(false);
        }
    }

    // useEffect
    useEffect(() => {
        fetchTours();
    },[])

    // 判断加载
    if(loading){
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if(!tours.length){
        return (
            <main>
                <div className="title">
                    <h2>No Tour</h2>
                    <button onClick={()=> fetchTours()} className="btn">Refresh</button>
                </div>
            </main>
        )
    }

    // 删除卡片
    const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;
