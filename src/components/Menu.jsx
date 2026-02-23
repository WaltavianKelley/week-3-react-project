import { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import '../Menu.css'

function Menu() {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const { data, error } = await supabase
                .from('menu_items')
                .select('*');

            if (error) {
                console.error('Error fetching menu:', error);
            } else {
                setMenuItems(data);
                console.log(data);
            }
        };
        fetchMenuItems();
    }, []);

    const breakfastItems = menuItems.filter(item => item.category === "Breakfast"

    );

    const lunchItems = menuItems.filter(item => item.category === "Lunch"

    );

    const dinnerItems = menuItems.filter(item => item.category === "Dinner"

    );

    const drinkItems = menuItems.filter(item => item.category === "Drinks"

    );

    return (
        <>


            <div className="menu-container">

                <h1>Menu</h1>

                <div className="menu-section">
                    <h2>Breakfast</h2>

                    <div className="menu-grid">

                    {breakfastItems.map(item => (
                        <div className="menu-card" key={item.id}>
                            <img src={item.Image_url} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p className="price">
                                ${Number(item.price).toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>
                </div>
                <h2>Lunch</h2>

                    <div className="menu-grid">
                {lunchItems.map(item => (
                    <div className="menu-card" key={item.id}>
                         <img src={item.Image_url} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className="price">
                            ${Number(item.price).toFixed(2)}
                        </p>
                    </div>
                    
                ))}
                </div>

                <h2>Dinner</h2>
                    <div className="menu-grid">

                {dinnerItems.map(item => (
                    <div className="menu-card" key={item.id}>
                        <img src={item.Image_url} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className="price">
                            ${Number(item.price).toFixed(2)}
                        </p>
                    </div>
                ))}
                </div>

                <h2>Drinks</h2>

                <div className="menu-grid">

                {drinkItems.map(item => (
                    <div className="menu-card" key={item.id}>
                         <img src={item.Image_url} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className="price">
                            ${Number(item.price).toFixed(2)}
                        </p>
                    </div>
                ))}
                </div>

            </div>
        </>
    )


}

export default Menu;