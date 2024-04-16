import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import { getInventoryData } from '../services/inventoryService';
import { calculateStats } from '../utils/calculateStats';
import Widgets from './Widgets';

const UserView = () => {
    const [inventoryData, setInventoryData] = useState([]);
    const [stats, setStats] = useState({ totalProducts: 0, totalStoreValue: 0, outOfStock: 0, numberOfCategories: 0 });

    useEffect(() => {
        // Fetch inventory data from API
        const fetchData = async () => {
            const data = await getInventoryData();
            setInventoryData(data);
            const newStats = calculateStats(data);
            setStats(newStats);
        };
        fetchData();
    }, []);

    return (
        <div>
           <Widgets
                totalProducts={stats.totalProducts}
                totalStoreValue={stats.totalStoreValue}
                outOfStock={stats.outOfStock}
                numberOfCategories={stats.numberOfCategories}
            />
            <ProductTable data={inventoryData} />
        </div>
    );
};

export default UserView;
