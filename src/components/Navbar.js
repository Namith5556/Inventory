import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/material';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000',
  borderBottom: '1px dotted lightgray',
});

const Navbar = ({ isToggled, onToggle }) => {
    return (
      <StyledAppBar position="static">
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Typography variant="h6" sx={{ color: 'white', display: 'flex',fontSize: '16px', alignItems: 'center', marginRight: '10px', paddingRight: '10px', borderRight: '1px dotted lightgray' }}>
            <span style={{ marginRight: '8px' }}>user</span>
            <Switch checked={isToggled} onChange={onToggle} color="success" />
            <span style={{ marginLeft: '8px', marginRight: '8px' }}>admin</span>
          </Typography>
          <LogoutIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
        </Toolbar>
      </StyledAppBar>
    );
}

export default Navbar;
