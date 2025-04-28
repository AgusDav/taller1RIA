import { 
    Paper, BottomNavigation, BottomNavigationAction, 
    Fab, Snackbar, IconButton 
  } from '@mui/material';
  import RestoreIcon from '@mui/icons-material/Restore';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import AddIcon from '@mui/icons-material/Add';
  import CloseIcon from '@mui/icons-material/Close';
  
  const BottomActions = ({ 
    bottomNav, 
    setBottomNav, 
    snackbarOpen, 
    handleSnackbarClose,
    name
  }) => {
    
    const handleBottomNavChange = (event, newValue) => {
      setBottomNav(newValue);
    };
    
    return (
      <>
        {/* FAB (Floating Action Button) */}
        <Fab 
          color="secondary" 
          aria-label="add" 
          sx={{ 
            position: 'fixed', 
            bottom: 80, 
            right: 16,
            zIndex: 10,
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
          }}
        >
          <AddIcon />
        </Fab>
  
        {/* Bottom Navigation */}
        <Paper 
          sx={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0, 
            right: 0,
            zIndex: 5
          }} 
          elevation={8}
        >
          <BottomNavigation
            value={bottomNav}
            onChange={handleBottomNavChange}
            showLabels
            sx={{
              height: 65,
              '& .MuiBottomNavigationAction-root': {
                transition: 'all 0.3s',
                '&.Mui-selected': {
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.85rem',
                    fontWeight: 'bold'
                  },
                  '& .MuiSvgIcon-root': {
                    transform: 'translateY(-4px) scale(1.1)',
                  }
                }
              }
            }}
          >
            <BottomNavigationAction label="Recientes" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Ubicación" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Paper>
  
        {/* Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={handleSnackbarClose}
          message={`¡Hola ${name ? name : 'Usuario'}, se guardó correctamente!`}
          sx={{
            '& .MuiSnackbarContent-root': {
              bgcolor: 'primary.main',
              boxShadow: '0 6px 10px rgba(0,0,0,0.2)',
              borderRadius: 2
            }
          }}
          action={
            <IconButton
              size="small"
              color="inherit"
              onClick={handleSnackbarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </>
    );
  };
  
  export default BottomActions;