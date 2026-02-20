import {  useState ,useEffect } from 'react';
import { supabase } from '../services/supabaseClient';

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
        <div>

            <h1>Menu</h1>

            <h2>Breakfast</h2>

            {breakfastItems.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>${Number(item.price).toFixed(2)}</p>
                </div>
            ))}

            <h2>Lunch</h2>

            {lunchItems.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>${Number(item.price).toFixed(2)}</p>
                </div>
            ))}

            <h2>Dinner</h2>

            {dinnerItems.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>${Number(item.price).toFixed(2)}</p>
                </div>
            ))}

            <h2>Drinks</h2>

            {drinkItems.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>${Number(item.price).toFixed(2)}</p>
                </div>
            ))}

        </div>
    )


}

export default Menu;