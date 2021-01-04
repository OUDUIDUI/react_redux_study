import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";


const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>切换主题样式</button>
    )
}

export default ThemeToggle;