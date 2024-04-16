import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import { getInventoryData, updateInventoryData } from '../services/inventoryService'; 
import { calculateStats } from '../utils/calculateStats';
import Widgets from './Widgets';

const AdminView = (isAdmin) => {
    const [inventoryData, setInventoryData] = useState([]);
    const [stats, setStats] = useState({ totalProducts: 0, totalStoreValue: 0, outOfStock: 0, numberOfCategories: 0 });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getInventoryData();
            setInventoryData(data);
            updateStats(data);
        };
        fetchData();
    }, []);

    const updateProduct = async (updatedProduct) => {
        const updatedData = inventoryData.map((product) =>
            product.name === updatedProduct.name ? updatedProduct : product
        );
        setInventoryData(updatedData);
        await updateInventoryData(updatedData); 
        updateStats(updatedData);
    };

    const updateStats = (data) => {
        const newStats = calculateStats(data);
        setStats(newStats);
    };

    const onDeleteRow = async (deletedProduct) => {

        const updatedData = inventoryData.filter((product) => product.name !== deletedProduct.name);
        setInventoryData(updatedData);
        await updateInventoryData(updatedData); 
        updateStats(updatedData);
    };
    

    return (
        <div>
            <Widgets
                totalProducts={stats.totalProducts}
                totalStoreValue={stats.totalStoreValue}
                outOfStock={stats.outOfStock}
                numberOfCategories={stats.numberOfCategories}
            />
            <ProductTable
                data={inventoryData}
                updateProduct={updateProduct}
                onDeleteRow={onDeleteRow}
                isAdmin={isAdmin}
            />
        </div>
    );
};

export default AdminView;
