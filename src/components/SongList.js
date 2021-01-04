import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import AddSongForm from "./AddSongForm";

const SongList = () => {
    const [songs,setSongs] = useState([
        {title: '新世界 - 华晨宇', id: 1},
        {title: '好想爱这个世界啊 - 华晨宇', id: 2},
        {title: '斗牛 - 华晨宇', id: 3},
    ])
    const addSong = (title) => {
        setSongs([...songs,{title, id: uuidv4()}])
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <AddSongForm addSong={addSong} />
        </div>
    )
}

export default SongList;