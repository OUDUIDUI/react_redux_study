import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                <li style={{background: theme.ui}}>《撒哈拉的故事》</li>
                <li style={{background: theme.ui}}>《梦里花落知多少》</li>
                <li style={{background: theme.ui}}>《雨季不再来》</li>
            </ul>
        </div>
    )
}

export default BookList;