import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

const WidgetCard = ({ icon, title, value }) => {
  return (
    <Card style={{ backgroundColor: '#2b4031', color: 'white' }}>
    <CardContent>
      <Typography style={{ display: 'flex', alignItems: 'flex-start' }}>
        {React.cloneElement(icon, { style: { marginBottom: '5px' } })}
        <span style={{ paddingLeft: '5px', marginRight: '60px' }}>{title}</span>
      </Typography>
      <Typography variant='h2' style={{ fontSize: 40, fontWeight: 'bold' }}>
        {value}
      </Typography>
    </CardContent>
  </Card>
  

  );
};

const Widgets = ({ totalProducts, totalStoreValue, outOfStock, numberOfCategories }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} sx={{ margin: '10px', padding: '10px', maxWidth: 'calc(100% - 20px)' }}>
        <Grid item xs={3}>
          <WidgetCard
            icon={<ShoppingCartIcon sx={{ width: 36, height: 36 }} />}
            title="Total Products"
            value={totalProducts}
          />
        </Grid>
        <Grid item xs={3}>
          <WidgetCard
            icon={<CurrencyExchangeIcon sx={{ width: 36, height: 36 }} />}
            title="Total Store Value"
            value={totalStoreValue}
          />
        </Grid>
        <Grid item xs={3}>
          <WidgetCard
            icon={<RemoveShoppingCartIcon sx={{ width: 36, height: 36 }} />}
            title="Out of Stock"
            value={outOfStock}
          />
        </Grid>
        <Grid item xs={3}>
          <WidgetCard
            icon={<CategoryIcon sx={{ width: 36, height: 36 }} />}
            title="No of Category"
            value={numberOfCategories}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Widgets;
