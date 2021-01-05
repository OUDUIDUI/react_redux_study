import React,{useState,useEffect} from "react";

const SingleColor = ({color:{rgb,weight,hex},index}) => {
    const [alert,setAlert] = useState(false);
    const bg = rgb.join(',');
    useEffect(()=> {
        if(alert){
            setTimeout(() => {
                setAlert(false);
            },2000);
        }
    },[alert])
    return(
        <article className={`color ${index >10 ? 'color-light' : ''}`}
                 style={{backgroundColor:`rgb(${bg})`}}
                 onClick={() => {
                     setAlert(true);
                     navigator.clipboard.writeText(`#${hex}`)}
                 }>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
            {alert ? <p className='alert'>已经复制到剪切板</p> : ''}
        </article>
    )
}

export default SingleColor;