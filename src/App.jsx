import { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, Typography, Slide } from '@mui/material';
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
          
          {/* Sección Inicio - Solo visible en tab 0 */}
          <Slide direction="right" in={tabValue === 0} mountOnEnter unmountOnExit timeout={500}>
            <Box>
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
                Bienvenido a la demo de Material UI
              </Typography>

              <FormSection 
                tabValue={tabValue}
                name={name}
                setName={setName}
                handleSnackbarOpen={handleSnackbarOpen}
                alertOpen={alertOpen}
                setAlertOpen={setAlertOpen}
              />
            </Box>
          </Slide>

          {/* Sección Favoritos - Solo visible en tab 1 */}
          <Slide direction="left" in={tabValue === 1} mountOnEnter unmountOnExit timeout={500}>
            <Box>
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
                Tus elementos favoritos
              </Typography>

              <Typography paragraph>
                Esta sección mostraría tus elementos favoritos. Está en desarrollo.
              </Typography>
            </Box>
          </Slide>

          {/* Sección Perfil - Solo visible en tab 2 */}
          <Slide direction="left" in={tabValue === 2} mountOnEnter unmountOnExit timeout={500}>
            <Box>
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
                Perfil de usuario
              </Typography>

              <Typography paragraph>
                Esta sección mostraría tu perfil de usuario. Está en desarrollo.
              </Typography>
            </Box>
          </Slide>
          
          {/* Sección de tarjetas - Visible en todas las tabs */}
          <CardGrid />
          
          {/* Aparecen con animacion*/}
          <StatsTable />

          {/* Distintos tipos de alertas*/}
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