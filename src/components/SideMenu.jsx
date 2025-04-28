import { 
    Drawer, Box, Typography, Divider, List, ListItem, 
    ListItemIcon, ListItemText, Avatar
  } from '@mui/material';
  import HomeIcon from '@mui/icons-material/Home';
  import PersonIcon from '@mui/icons-material/Person';
  import SettingsIcon from '@mui/icons-material/Settings';
  import ExploreIcon from '@mui/icons-material/Explore';
  import InfoIcon from '@mui/icons-material/Info';
  
  const SideMenu = ({ drawerOpen, setDrawerOpen }) => {
    const menuItems = [
      { text: 'Inicio', icon: <HomeIcon /> },
      { text: 'Perfil', icon: <PersonIcon /> },
      { text: 'Configuración', icon: <SettingsIcon /> },
      { text: 'Explorar', icon: <ExploreIcon /> },
      { text: 'Acerca de', icon: <InfoIcon /> }
    ];
  
    return (
      <Drawer 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16
          }
        }}
      >
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar 
            sx={{ 
              bgcolor: 'primary.main',
              width: 50,
              height: 50,
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
            }}
          >
            MD
          </Avatar>
          <Box>
            <Typography variant="h6">Material Design</Typography>
            <Typography variant="body2" color="text.secondary">
              Showcase App
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mx: 2 }} />
        <List sx={{ px: 1 }}>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text}
              sx={{ 
                borderRadius: 2,
                mb: 0.5,
                '&:hover': { 
                  bgcolor: 'action.hover',
                  '& .MuiListItemIcon-root': {
                    color: 'primary.main'
                  }
                },
                transition: 'all 0.3s'
              }}
            >
              <ListItemIcon sx={{ transition: 'color 0.3s' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Divider sx={{ mx: 2 }} />
        <Box sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            © 2025 Material Design Showcase
          </Typography>
        </Box>
      </Drawer>
    );
  };
  
  export default SideMenu;