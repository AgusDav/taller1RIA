import { 
    Dialog, DialogTitle, DialogContent, DialogActions,
    Typography, Button, Divider 
  } from '@mui/material';
  
  const InfoDialog = ({ dialogOpen, handleDialogClose }) => {
    return (
      <Dialog 
        open={dialogOpen} 
        onClose={handleDialogClose}
        PaperProps={{
          elevation: 5,
          sx: { 
            borderRadius: 3,
            maxWidth: '500px',
            width: '100%'
          }
        }}
      >
        <DialogTitle sx={{ pb: 1, pt: 3, px: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Información sobre Material Design
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ px: 3 }}>
          <Typography paragraph sx={{ mt: 1 }}>
            Esta aplicación usa Material Design para React (MUI), que implementa los principios 
            de diseño de Material Design de Google con una interfaz moderna y atractiva.
          </Typography>
          <Typography paragraph>
            Material Design es un sistema de diseño desarrollado por Google que combina teoría del 
            diseño clásico con innovación tecnológica, creando interfaces intuitivas y coherentes.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="subtitle2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            © 2025 Demo de Material Design - Todos los derechos reservados
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button 
            onClick={handleDialogClose} 
            color="inherit"
            sx={{ fontWeight: 'medium', opacity: 0.7 }}
          >
            Cerrar
          </Button>
          <Button 
            onClick={handleDialogClose} 
            color="primary" 
            variant="contained"
            sx={{ px: 3 }}
          >
            Entendido
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default InfoDialog;