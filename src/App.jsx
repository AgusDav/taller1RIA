import { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { getAppTheme } from './theme';

// Componentes
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import FormSection from './components/FormSection';
import CardGrid from './components/CardGrid';
import InfoDialog from './components/InfoDialog';
import BottomActions from './components/BottomActions';
import LoadingIndicators from './components/LoadingIndicators';
import StatsTable from "./components/StatsTable";
import ContentCarousel from "./components/ContentCarousel";
import AlertsSection from "./components/AlertsSection";
import TransitionPage from "./components/TransitionPage";
import ScrollSection from "./components/ScrollSection";
import Dashboard from "./components/Dashboard";

function App() {
  // Estados
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tabValue, setTabValue] = useState(false);
  const [bottomNav, setBottomNav] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  // Tema personalizado
  const theme = getAppTheme(darkMode);

  // Funciones para manejar eventos
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

  // Función para el menú lateral
  const handleListItemClick = (index) => {
    setDrawerOpen(false);
    // Aquí podrías añadir más lógica según el ítem seleccionado
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh', 
          width: '100%',
          background: darkMode 
            ? 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)' 
            : 'linear-gradient(135deg, #f5f5f5 0%, #fff 100%)',
          transition: 'background 0.5s ease'
        }}
      >
        {/* Header con AppBar */}
        <Header 
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          tabValue={tabValue}
          setTabValue={setTabValue}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleDialogOpen={handleDialogOpen}
        />

        {/* Drawer (Menú lateral) */}
        <SideMenu 
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />

        {/* Contenido principal */}
        <Box 
          component="main" 
          sx={{ 
            p: { xs: 2, sm: 3, md: 4 }, 
            flexGrow: 1, 
            width: '100%',
            maxWidth: 1900,
            mx: 'auto'
          }}
        >
          {/* Indicadores de progreso */}
          <LoadingIndicators loading={loading} />
          
          {/* Título de la sección según tab */}
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: 'primary.main',
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              mb: 3,
              opacity: loading ? 0.5 : 1,
              transition: 'opacity 0.3s'
            }}
          >
            {tabValue == 0 && "Bienvenido a la demo de Material UI"}
            {tabValue == 1 && "Tus elementos favoritos"}
            {tabValue == 2 && "Perfil de usuario"}
          </Typography>
          
          {/* Sección de formulario - Solo visible en tab 0 */}
          <FormSection 
            tabValue={tabValue}
            name={name}
            setName={setName}
            handleSnackbarOpen={handleSnackbarOpen}
            alertOpen={alertOpen}
            setAlertOpen={setAlertOpen}
          />
          
          {/* Sección Favoritos - Solo visible en tab 1 */}
          {tabValue == 1 && (
            <Typography paragraph>
              Esta sección mostraría tus elementos favoritos. Está en desarrollo.
            </Typography>
          )}
          
          {/* Sección Perfil - Solo visible en tab 2 */}
          {tabValue == 2 && (
            <Typography paragraph>
              Esta sección mostraría tu perfil de usuario. Está en desarrollo.
            </Typography>
          )}
          
          {/* Sección de tarjetas - Visible en todas las tabs */}
          <CardGrid />
          
          <StatsTable />

          <AlertsSection />

          <Dashboard />
          
          <ScrollSection />

          <ContentCarousel />
        </Box>

        {/* Elementos inferiores: FAB, Navigation y Snackbar */}
        <BottomActions 
          bottomNav={bottomNav}
          setBottomNav={setBottomNav}
          snackbarOpen={snackbarOpen}
          handleSnackbarClose={handleSnackbarClose}
          name={name}
        />
        
        {/* Dialog */}
        <InfoDialog 
          dialogOpen={dialogOpen}
          handleDialogClose={handleDialogClose}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;