import { Alert, Stack, Button, AlertTitle, Snackbar } from "@mui/material";
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
    <Stack spacing={4} sx={{ width: "100%", p: 4 }}>
      {/* Alert simple */}
      <Alert severity="info">
        Esta es una alerta de información.
      </Alert>

      {/* Alert éxito */}
      <Alert severity="success">
        Acción realizada exitosamente.
      </Alert>

      {/* Alert de advertencia */}
      <Alert severity="warning">
        Cuidado: revisá tus datos antes de continuar.
      </Alert>

      {/* Alert de error */}
      <Alert severity="error">
        Error: no se pudo completar la acción.
      </Alert>

      {/* Alert con título */}
      <Alert severity="warning">
        <AlertTitle>Atención</AlertTitle>
        Este es un mensaje de advertencia con título.
      </Alert>

      {/* Alert filled */}
      <Alert variant="filled" severity="success">
        Operación completada con éxito (estilo filled).
      </Alert>

      {/* Alert con acción */}
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

      {/* Botón para mostrar una Snackbar */}
      <Button variant="contained" onClick={handleClick}>
        Mostrar Notificación
      </Button>

      {/* Alerta emergente (Snackbar) */}
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
    </Stack>
  );
};

export default AlertsSection;