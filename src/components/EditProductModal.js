import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const EditProductModal = ({ product, open, onClose, onSave }) => {
    const [editedProduct, setEditedProduct] = useState({ ...product });
    const [priceWithoutSymbol, setPriceWithoutSymbol] = useState('');
    const [valueWithoutSymbol, setValueWithoutSymbol] = useState('');

    useEffect(() => {
        setPriceWithoutSymbol(editedProduct.price.replace('$', ''));
        setValueWithoutSymbol(editedProduct.value.replace('$', ''));
    }, [editedProduct]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleSubmit = () => {
        const updatedProduct = { ...editedProduct };
        updatedProduct.price = `$${priceWithoutSymbol}`;
        updatedProduct.value = `$${valueWithoutSymbol}`;
        onSave(updatedProduct);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: '#333', borderRadius: '10px', boxShadow: 24, p: 4 }}>
                <Typography variant="h4" component="h4">Edit Product</Typography>
                <Typography variant="subtitle1" component="div" sx={{ marginBottom: '10px' }}>{product.name}</Typography>
                <IconButton onClick={onClose} sx={{ position: 'absolute', top: '5px', right: '5px' }}>
                    <ClearIcon sx={{ width: 36, height: 36 }} color="success" />
                </IconButton>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                        <Box>
                            <Typography variant="subtitle1" sx={{ marginBottom: '2px' }}>Category</Typography>
                            <TextField
                                name="category"
                                placeholder="Category"
                                InputLabelProps={{ shrink: true }}
                                value={editedProduct.category}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                size="small"
                                sx={{ '& .MuiInputBase-input': { color: 'white', border: '1px solid white', height: '20px' } }}
                            />
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" sx={{ marginBottom: '2px' }}>Price</Typography>
                            <TextField
                                name="price"
                                placeholder="Price"
                                InputLabelProps={{ shrink: true }}
                                type="number"
                                value={priceWithoutSymbol}
                                onChange={(e) => setPriceWithoutSymbol(e.target.value)}
                                fullWidth
                                margin="normal"
                                size="small"
                                sx={{ '& .MuiInputBase-input': { color: 'white', border: '1px solid white', height: '20px' } }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <Box>
                            <Typography variant="subtitle1" sx={{ marginBottom: '2px' }}>Quantity</Typography>
                            <TextField
                                name="quantity"
                                placeholder="Quantity"
                                InputLabelProps={{ shrink: true }}
                                type="number"
                                value={editedProduct.quantity}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                size="small"
                                sx={{ '& .MuiInputBase-input': { color: 'white', border: '1px solid white', height: '20px' } }}
                            />
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" sx={{ marginBottom: '2px' }}>Value</Typography>
                            <TextField
                                name="value"
                                placeholder="Value"
                                InputLabelProps={{ shrink: true }}
                                type="number"
                                value={valueWithoutSymbol}
                                onChange={(e) => setValueWithoutSymbol(e.target.value)}
                                fullWidth
                                margin="normal"
                                size="small"
                                sx={{ '& .MuiInputBase-input': { color: 'white', border: '1px solid white', height: '20px' } }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <Button onClick={onClose} variant="text" color="success">Cancel</Button>
                    <Button type="submit" onClick={handleSubmit}variant="text" color="success" style={{ marginLeft: '10px' }}>Save</Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default EditProductModal;
