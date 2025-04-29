import { Alert, Grid, Button, AlertTitle, Snackbar, Stack, Typography, Box } from "@mui/material";
import { useState } from "react";

const AlertsSection = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ mt: 2, mb: 3, fontWeight: 'bold' }}>
        Tipos de alertas
      </Typography>
      <Grid 
        container spacing={4} sx={{ width: "100%", p: 4 }}
        justifyContent="center"    
      >

          {/* Columna 1 */}
        <Grid item xs={12} sm={6}>
          <Stack spacing={4}>
            <Alert severity="info">
              Esta es una alerta de información.
            </Alert>

            <Alert severity="success">
              Acción realizada exitosamente.
            </Alert>

            <Alert severity="warning">
              Cuidado: revisá tus datos antes de continuar.
            </Alert>

            <Alert severity="error">
              Error: no se pudo completar la acción.
            </Alert>
          </Stack>
        </Grid>

        {/* Columna 2 */}
        <Grid item xs={12} sm={6}>
          <Stack spacing={4}>
            <Alert severity="warning">
              <AlertTitle>Atención</AlertTitle>
              Este es un mensaje de advertencia con título.
            </Alert>

            <Alert variant="filled" severity="success">
              Operación completada con éxito (estilo filled).
            </Alert>
            
            <Alert
              severity="info"
              action={
                <Button color="inherit" size="small">
                  DESHACER
                </Button>
              }
            >
              Cambios guardados.
            </Alert>
            <Button fullWidth variant="contained" onClick={handleClick}>
              Mostrar Notificación
            </Button>
          </Stack>
        </Grid>

        {/* Alerta emergente */}
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            Acción realizada con éxito
          </Alert>
        </Snackbar>
      </Grid>
    </Box>
  );
};

export default AlertsSection;