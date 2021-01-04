import React, {createContext, Component} from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {bg: '#eee', ui: "#ddd", syntax: "#555"},
        dark: {bg: '#555', ui: "#333", syntax: "#ddd"},
    };
    toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;