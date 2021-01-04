import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import React from "react";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Navbar/>
                <BookList/>
                <ThemeToggle />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
