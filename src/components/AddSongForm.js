import React, {useState,useContext} from "react";
import {SongContext} from "../contexts/SongContext";

const AddSongForm = ({addSong}) => {
    const {dispath} = useContext(SongContext);
    const [title,setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispath({type:'ADD_SONG',title})
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>歌词名称：</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" value="添加歌曲" />
        </form>
    )
}

export default AddSongForm;