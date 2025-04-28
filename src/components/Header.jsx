import { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, IconButton, Badge, 
  Paper, Tabs, Tab, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = ({ 
  drawerOpen, 
  setDrawerOpen, 
  tabValue, 
  setTabValue, 
  darkMode, 
  setDarkMode, 
  handleDialogOpen 
}) => {
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" elevation={4}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Demo Material Design
        </Typography>
        <IconButton 
          color="inherit" 
          onClick={handleThemeToggle}
          sx={{
            transition: 'transform 0.3s',
            '&:hover': { transform: 'rotate(30deg)' }
          }}
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Badge 
          badgeContent={4} 
          color="error" 
          sx={{ 
            mx: 1,
            '& .MuiBadge-badge': {
              animation: 'pulse 1.5s infinite',
              '@keyframes pulse': {
                '0%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.2)' },
                '100%': { transform: 'scale(1)' },
              }
            }
          }}
        >
          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>
        </Badge>
        <Button 
          color="inherit" 
          onClick={handleDialogOpen}
          sx={{
            px: 2,
            borderRadius: '20px',
            border: '1px solid',
            borderColor: 'rgba(255,255,255,0.3)',
            '&:hover': {
              borderColor: 'rgba(255,255,255,0.8)',
              backgroundColor: 'rgba(255,255,255,0.1)'
            }
          }}
        >
          Info
        </Button>
      </Toolbar>
      {/* Tabs para navegación secundaria */}
      <Paper square sx={{ width: '100%', bgcolor: 'primary.dark' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="inherit"
        >
          <Tab icon={<HomeIcon />} label="Inicio" />
          <Tab icon={<FavoriteIcon />} label="Favoritos" />
          <Tab icon={<PersonIcon />} label="Perfil" />
        </Tabs>
      </Paper>
    </AppBar>
  );
};

export default Header;