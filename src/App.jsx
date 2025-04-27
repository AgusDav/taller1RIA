// App.jsx
import { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText,
  Card, CardContent, CardActions, CardMedia, TextField, Snackbar, Dialog, DialogTitle,
  DialogContent, DialogActions, Paper, Tabs, Tab, BottomNavigation, BottomNavigationAction,
  CircularProgress, LinearProgress, Chip, Avatar, Switch, FormControlLabel, Radio, RadioGroup,
  FormControl, FormLabel, Checkbox, Fab, Box, IconButton, Alert, Badge, Grid, Divider,
  ThemeProvider, createTheme, CssBaseline
} from '@mui/material';

// Iconos
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function App() {
  // Estados
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [bottomNav, setBottomNav] = useState(0);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  // Tema personalizado
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#f50057',
      },
    },
  });

  // Funciones para manejar eventos
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleBottomNavChange = (event, newValue) => {
    setBottomNav(newValue);
  };

  const handleSnackbarOpen = () => {
    setLoading(true);
    // Simulamos un proceso
    setTimeout(() => {
      setLoading(false);
      setSnackbarOpen(true);
      if (name) {
        setAlertOpen(true);
      }
    }, 1500);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* AppBar (Barra superior) */}
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Mi Demo de Material Design
            </Typography>
            <IconButton color="inherit" onClick={handleThemeToggle}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Badge badgeContent={4} color="error" sx={{ mx: 1 }}>
              <IconButton color="inherit">
                <FavoriteIcon />
              </IconButton>
            </Badge>
            <Button color="inherit" onClick={handleDialogOpen}>Info</Button>
          </Toolbar>
          {/* Tabs para navegación secundaria */}
          <Paper square>
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

        {/* Drawer (Menú lateral) */}
        <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: 250 }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Material Design</Typography>
            </Box>
            <Divider />
            <List>
              {[
                { text: 'Inicio', icon: <HomeIcon /> },
                { text: 'Perfil', icon: <PersonIcon /> },
                { text: 'Configuración', icon: <SettingsIcon /> }
              ].map((item) => (
                <ListItem button key={item.text}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Contenido principal */}
        <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
          {/* Indicadores de progreso */}
          {loading && (
            <Box sx={{ width: '100%', mb: 3 }}>
              <LinearProgress />
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <CircularProgress />
              </Box>
            </Box>
          )}
          
          {/* Alerta */}
          {alertOpen && (
            <Alert 
              severity="success" 
              sx={{ mb: 2 }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setAlertOpen(false)}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              ¡Bienvenido/a {name}! Tus datos han sido guardados correctamente.
            </Alert>
          )}
          
          <Typography variant="h5" gutterBottom>
            {tabValue === 0 && "Bienvenido a la demo"}
            {tabValue === 1 && "Tus elementos favoritos"}
            {tabValue === 2 && "Perfil de usuario"}
          </Typography>
          
          {tabValue === 0 && (
            <>
              {/* TextField */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={6}>
                  <TextField 
                    label="Ingrese su nombre" 
                    variant="outlined" 
                    fullWidth 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                    label="Correo electrónico" 
                    variant="outlined" 
                    fullWidth 
                    type="email"
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
              
              {/* Chips */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                <Chip label="Material UI" color="primary" />
                <Chip label="React" color="secondary" />
                <Chip 
                  label="Borrable" 
                  onDelete={() => {}} 
                  color="default" 
                />
                <Chip 
                  avatar={<Avatar>M</Avatar>} 
                  label="Con avatar" 
                  variant="outlined" 
                />
              </Box>
              
              {/* Controles de formulario */}
              <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Configuración de notificaciones</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FormControlLabel 
                      control={<Switch color="primary" />} 
                      label="Activar notificaciones" 
                    />
                    <FormControlLabel 
                      control={<Checkbox defaultChecked color="secondary" />} 
                      label="Recibir promociones" 
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Frecuencia</FormLabel>
                      <RadioGroup defaultValue="diaria" row>
                        <FormControlLabel value="diaria" control={<Radio />} label="Diaria" />
                        <FormControlLabel value="semanal" control={<Radio />} label="Semanal" />
                        <FormControlLabel value="mensual" control={<Radio />} label="Mensual" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
              
              {/* Botones */}
              <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handleSnackbarOpen}
                  startIcon={<SaveIcon />}
                >
                  Guardar
                </Button>
                <Button 
                  variant="outlined" 
                  color="secondary"
                >
                  Cancelar
                </Button>
                <Button 
                  variant="text" 
                  color="primary"
                >
                  Ayuda
                </Button>
              </Box>
            </>
          )}
          
          {/* Tarjetas */}
          <Typography variant="h6" gutterBottom>Ejemplos de tarjetas</Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/api/placeholder/400/140"
                  alt="Material Design"
                />
                <CardContent>
                  <Typography variant="h6">Card con imagen</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Las tarjetas pueden contener acciones, texto e imágenes.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<ShareIcon />}>Compartir</Button>
                  <Button size="small" color="error" startIcon={<DeleteIcon />}>Eliminar</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">Formulario</Typography>
                  <TextField 
                    label="Nombre" 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    margin="normal" 
                  />
                  <TextField 
                    label="Comentario" 
                    variant="outlined" 
                    multiline
                    rows={2}
                    fullWidth
                    margin="normal" 
                  />
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">Enviar</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>MD</Avatar>
                    <Typography variant="h6">Card con avatar</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Los avatares pueden representar usuarios o marcas.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Ver perfil</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* FAB (Floating Action Button) */}
        <Fab 
          color="secondary" 
          aria-label="add" 
          sx={{ position: 'fixed', bottom: 80, right: 16 }}
        >
          <AddIcon />
        </Fab>

        {/* Bottom Navigation */}
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            value={bottomNav}
            onChange={handleBottomNavChange}
            showLabels
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
          message={`Hola ${name ? name : 'Usuario'}, se guardó correctamente`}
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
        
        {/* Dialog */}
        <Dialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>Información sobre Material Design</DialogTitle>
          <DialogContent>
            <Typography paragraph>
              Esta aplicación usa Material Design para React (MUI), que implementa los principios de diseño de Material Design de Google.
            </Typography>
            <Typography paragraph>
              Material Design es un sistema de diseño desarrollado por Google que combina teoría del diseño clásico con innovación tecnológica.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" color="text.secondary">
              © 2025 Demo de Material Design
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">Cerrar</Button>
            <Button onClick={handleDialogClose} color="primary" variant="contained">Entendido</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}

export default App;