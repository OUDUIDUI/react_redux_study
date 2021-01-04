import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

class ThemeToggle extends Component {
    // 获取ThemeContext
    static contextType = ThemeContext;

    render() {
        const {toggleTheme} = this.context;
        return (
            <button onClick={toggleTheme}>切换主题样式</button>
        )
    }
}

export default ThemeToggle;