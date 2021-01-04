import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

class BookList extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const {isLightTheme, light, dark} = context;
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
            }}
            </ThemeContext.Consumer>
        )
    }
}

export default BookList;