import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';
import EditProductModal from './EditProductModal';

const ProductRow = ({ product, updateProduct, isAdmin, onDeleteRow }) => {
    const theme = useTheme();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [disableIcon, setDisableIcon] = useState(true);

    const handleOpenEditModal = () => {
        if (!disableIcon) return;
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleSaveProduct = (updatedProduct) => {
        updateProduct(updatedProduct);
        handleCloseEditModal();
    };

    const handleDisableRow = () => {
        setDisableIcon(!disableIcon);
    };

    const handleDeleteRow = () => {
        onDeleteRow(product);
    };

    return (
        <>
            <TableRow>
                <TableCell style={{ color: disableIcon ? 'white' : '#444' }}>{product.name}</TableCell>
                <TableCell style={{ color: disableIcon ? 'white' : '#444' }}>{product.category}</TableCell>
                <TableCell style={{ color: disableIcon ? 'white' : '#444' }}>{product.price}</TableCell>
                <TableCell style={{ color: disableIcon ? 'white' : '#444' }}>{product.quantity}</TableCell>
                <TableCell style={{ color: disableIcon ? 'white' : '#444' }}>{product.value}</TableCell>
                <TableCell>
                    <span onClick={handleOpenEditModal} style={{ cursor: disableIcon ? 'pointer' : 'not-allowed', marginRight: '2px' }}>
                        <EditIcon sx={{ color: isAdmin && disableIcon ? theme.palette.success.main : '#444', fontSize: 'small' }} />
                    </span>
                    <span onClick={handleDisableRow} style={{ cursor: isAdmin ? 'pointer' : 'not-allowed', marginRight: '2px' }}>
                        {isAdmin ? (
                            disableIcon ? (
                                <VisibilityIcon sx={{ color: theme.palette.primary.light, fontSize: 'small' }} />
                            ) : (
                                <VisibilityOffIcon sx={{ color: theme.palette.primary.light, fontSize: 'small' }} />
                            )
                        ) : (
                            <VisibilityOffIcon sx={{ color: '#ccc', fontSize: 'small' }} />
                        )}
                    </span>
                    <span onClick={handleDeleteRow} style={{ cursor: isAdmin ? 'pointer' : 'not-allowed' }}>
                        <DeleteIcon sx={{ color: isAdmin && disableIcon ? theme.palette.error.main : '#444', fontSize: 'small' }} />
                    </span>
                </TableCell>
            </TableRow>
            {isEditModalOpen && isAdmin && (
                <EditProductModal
                    product={product}
                    open={isEditModalOpen}
                    onClose={handleCloseEditModal}
                    onSave={handleSaveProduct}
                />
            )}
        </>
    );
};

export default ProductRow;
