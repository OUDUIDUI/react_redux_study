import React, {useState} from 'react';
import items from './data';
import Categories from './components/Categories';
import Menu from './components/Menu';

const allCategories = ['all', ...new Set(items.map(item => item.category))];

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    // 过滤菜单
    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter(item => item.category === category);
        setMenuItems(newItems);
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>美食美客——菜单</h2>
                    <div className="underline"/>
                </div>
                <Categories categories={categories} filterItems={filterItems}/>
                <Menu items={menuItems}/>
            </section>
        </main>
    );
}

export default App;
