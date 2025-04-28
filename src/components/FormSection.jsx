import { useState } from 'react';
import { 
  Grid, TextField, Box, Chip, Paper, Typography, 
  FormControlLabel, Switch, Checkbox, FormControl, 
  FormLabel, RadioGroup, Radio, Button, Avatar, Alert
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const FormSection = ({ 
  tabValue, 
  name, 
  setName, 
  handleSnackbarOpen, 
  alertOpen, 
  setAlertOpen 
}) => {
  if (tabValue !== 0) return null;
  
  return (
    <>
      {/* Alerta */}
      {alertOpen && (
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
          onClose={() => setAlertOpen(false)}
        >
          ¡Bienvenido/a {name}! Tus datos han sido guardados correctamente.
        </Alert>
      )}
      
      {/* TextField */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
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
      
      {/* Chips */}
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
      
      {/* Controles de formulario */}
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
      
      {/* Botones */}
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
    </>
  );
};

export default FormSection;