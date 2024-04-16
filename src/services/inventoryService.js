export const getInventoryData = async () => {
    try {
        /*const response = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
        if (!response.ok) {
         throw new Error('Failed to fetch inventory data');
        }
        const data = response.json();*/
        const data = [{"name":"Bluetooth","category":"Electronic","value":"$150","quantity":5,"price":"$30"},{"name":"Edifier M43560","category":"Electronic","value":"0","quantity":0,"price":"$0"},{"name":"Sony 4k ultra 55 inch TV","category":"Electronic","value":"$1190","quantity":17,"price":"$70"},{"name":"Samsumg 55 inch TV","category":"Electronic","value":"$600","quantity":50,"price":"$12"},{"name":"samsumg S34 Ultra","category":"phone","value":"$0","quantity":0,"price":"$0"}];
        return data;
    } catch (error) {
        console.error('Error fetching inventory data:', error);
        return [];
    }
};

export const updateInventoryData = async (updatedData) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
        console.log('Inventory data updated successfully:', updatedData);
    } catch (error) {
        console.error('Error updating inventory data:', error);
    }
};
