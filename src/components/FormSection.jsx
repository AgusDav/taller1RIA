import React from 'react';
import {
  Alert,
  Grid,
  TextField,
  Box,
  Chip,
  Avatar,
  Paper,
  Typography,
  FormControlLabel,
  Switch,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Button
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

// Componente de alerta de éxito
const SuccessAlert = ({ name, open, onClose }) => {
  if (!open) return null;
  
  return (
    <Alert 
      severity="success" 
      sx={{ 
        mb: 4, 
        animation: 'slideIn 0.5s ease',
        '@keyframes slideIn': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }}
      onClose={onClose}
    >
      ¡Bienvenido/a {name}! Tus datos han sido guardados correctamente.
    </Alert>
  );
};

// Componente de campos de texto
const TextFields = ({ name, setName }) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <TextField 
        label="Ingrese su nombre" 
        variant="outlined" 
        fullWidth 
        value={name}
        onChange={(e) => setName(e.target.value)}
        helperText="Este nombre aparecerá en tu perfil"
        sx={{ 
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'primary.main',
              borderWidth: '2px'
            }
          }
        }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField 
        label="Correo electrónico" 
        variant="outlined" 
        fullWidth 
        type="email"
        sx={{ 
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'primary.main',
              borderWidth: '2px'
            }
          }
        }}
      />
    </Grid>
  </Grid>
);

// Componente de chips
const CategoryChips = () => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
    <Chip 
      label="Material UI" 
      color="primary" 
      sx={{ fontWeight: 'bold' }}
    />
    <Chip 
      label="React" 
      color="secondary" 
      sx={{ fontWeight: 'bold' }}
    />
    <Chip 
      label="Borrable" 
      onDelete={() => {}} 
      color="default" 
    />
    <Chip 
      avatar={<Avatar sx={{ bgcolor: 'primary.dark' }}>M</Avatar>} 
      label="Con avatar" 
      variant="outlined" 
    />
  </Box>
);

// Componente de configuración de notificaciones
const NotificationSettings = () => (
  <Paper 
    elevation={3} 
    sx={{ 
      p: 3, 
      mb: 4, 
      borderRadius: 3,
      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)'
    }}
  >
    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
      Configuración de notificaciones
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControlLabel 
          control={
            <Switch 
              color="primary" 
              sx={{ 
                '& .MuiSwitch-switchBase.Mui-checked': {
                  transform: 'translateX(16px)'
                }
              }}
            />
          } 
          label="Activar notificaciones" 
        />
        <FormControlLabel 
          control={
            <Checkbox 
              defaultChecked 
              color="secondary" 
              sx={{
                '&.Mui-checked': {
                  transform: 'scale(1.1)'
                },
                transition: 'transform 0.2s'
              }}
            />
          } 
          label="Recibir promociones" 
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ color: 'text.primary', mb: 1 }}>
            Frecuencia
          </FormLabel>
          <RadioGroup defaultValue="diaria" row>
            <FormControlLabel 
              value="diaria" 
              control={<Radio />} 
              label="Diaria" 
            />
            <FormControlLabel 
              value="semanal" 
              control={<Radio />} 
              label="Semanal" 
            />
            <FormControlLabel 
              value="mensual" 
              control={<Radio />} 
              label="Mensual" 
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  </Paper>
);

// Componente de botones de acción
const ActionButtons = ({ handleSnackbarOpen }) => (
  <Box sx={{ mb: 5, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <Button 
      variant="contained" 
      color="primary" 
      onClick={handleSnackbarOpen}
      startIcon={<SaveIcon />}
      size="large"
      sx={{ px: 4 }}
    >
      Guardar
    </Button>
    <Button 
      variant="outlined" 
      color="secondary"
      size="large"
    >
      Cancelar
    </Button>
    <Button 
      variant="text" 
      color="primary"
      size="large"
    >
      Ayuda
    </Button>
  </Box>
);

// Componente principal FormSection
const FormSection = ({ 
  tabValue, 
  name, 
  setName, 
  handleSnackbarOpen, 
  alertOpen, 
  setAlertOpen 
}) => {
  // Si no es la pestaña activa, no renderizar nada
  if (tabValue !== 0) return null;
  
  return (
    <>
      {/* Alerta de éxito */}
      <SuccessAlert 
        name={name} 
        open={alertOpen} 
        onClose={() => setAlertOpen(false)} 
      />
      
      {/* Layout principal de dos columnas */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {/* Columna izquierda: Formulario y Chips */}
        <Grid item xs={12} md={6}>
          {/* Campos de entrada de datos */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'medium' }}>
              Información Personal
            </Typography>
            <TextFields name={name} setName={setName} />
          </Box>
          
          {/* Chips de categorías */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'medium' }}>
              Categorías
            </Typography>
            <CategoryChips />
          </Box>
        </Grid>
        
        {/* Columna derecha: Configuración de notificaciones */}
        <Grid item xs={12} md={6}>
          <NotificationSettings />
        </Grid>
      </Grid>
      
      {/* Botones de acción */}
      <ActionButtons handleSnackbarOpen={handleSnackbarOpen} />
    </>
  );
};

export default FormSection;