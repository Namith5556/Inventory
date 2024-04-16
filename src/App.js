import React, { useState, useEffect } from 'react';
import AdminView from './components/AdminView';
import UserView from './components/UserView';
import { getInventoryData } from './services/inventoryService';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    const [isAdmin, setIsAdmin] = useState(true);
    const [inventoryData, setInventoryData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getInventoryData();
            setInventoryData(data);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <Navbar isToggled={isAdmin} onToggle={() => setIsAdmin(!isAdmin)} />
            <h1 >Inventory Stats</h1>
            {isAdmin ? <AdminView isAdmin={isAdmin}/> : <UserView />}
        </div>
    );
}

export default App;
