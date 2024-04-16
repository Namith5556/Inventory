import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductRow from './ProductRow';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material';

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: '#111',
  border: '1px solid #eee',
});

const ProductTable = ({ data, updateProduct, isAdmin, onDeleteRow }) => { 
    
    return (
        <Grid container justifyContent="center" style={{ margin: '20px auto', maxWidth: 'calc(100% - 80px)'  }}>
            <Grid item xs={12}>
                <StyledTableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: 'white' }}>Name</TableCell>
                                <TableCell style={{ color: 'white' }}>Category</TableCell>
                                <TableCell style={{ color: 'white' }}>Price</TableCell>
                                <TableCell style={{ color: 'white' }}>Quantity</TableCell>
                                <TableCell style={{ color: 'white' }}>Value</TableCell>
                                <TableCell style={{ color: 'white' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((product) => (
                                <ProductRow
                                    key={product.id}
                                    product={product}
                                    updateProduct={updateProduct}
                                    isAdmin={isAdmin}
                                    onDeleteRow={onDeleteRow}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            </Grid>
        </Grid>
    
    );
};

export default ProductTable;
