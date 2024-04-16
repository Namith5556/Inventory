export const calculateStats = (inventoryData) => {
    const totalProducts = inventoryData.length;
    const totalStoreValue = inventoryData.reduce((total, product) => total + (parseFloat(product.value.replace('$', '')) * product.quantity), 0);
    const outOfStock = inventoryData.filter(product => product.quantity === 0).length;
    const numberOfCategories = new Set(inventoryData.map(product => product.category)).size;

    return {
        totalProducts,
        totalStoreValue,
        outOfStock,
        numberOfCategories
    };
};
