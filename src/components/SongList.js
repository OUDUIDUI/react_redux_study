import React, { useContext } from "react";

import AddSongForm from "./AddSongForm";
import {SongContext} from "../contexts/SongContext";

const SongList = () => {
    const {songs,dispath} = useContext(SongContext);
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id} onClick={() => dispath({type:'REMOVE_SONG',id:song.id})}>{song.title}</li>
                    )
                })}
            </ul>
            <AddSongForm />
        </div>
    )
}

export default SongList;