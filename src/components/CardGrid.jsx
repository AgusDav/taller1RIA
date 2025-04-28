import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, TextField, Box, Avatar } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

const CardGrid = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mt: 2, mb: 3, fontWeight: 'bold' }}>
        Ejemplos de tarjetas
      </Typography>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card 
            elevation={4}
            sx={{ 
              overflow: 'hidden', 
              position: 'relative'
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image="/android-chrome-192x192.png"
              alt="Material Design"
              sx={{
                transition: 'transform 0.5s',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>Card con imagen</Typography>
              <Typography variant="body2" color="text.secondary">
                Las tarjetas pueden contener acciones, texto e imágenes.
                Son elementos versátiles para mostrar contenido.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" startIcon={<ShareIcon />}>Compartir</Button>
              <Button size="small" color="error" startIcon={<DeleteIcon />}>Eliminar</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={4} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>Formulario</Typography>
              <TextField 
                label="Nombre" 
                variant="outlined" 
                size="small"
                fullWidth
                margin="normal" 
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'primary.light',
                    }
                  }
                }}
              />
              <TextField 
                label="Comentario" 
                variant="outlined" 
                multiline
                rows={3}
                fullWidth
                margin="normal" 
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'primary.light',
                    }
                  }
                }}
              />
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                color="primary" 
                variant="contained"
                sx={{ mx: 'auto', px: 3 }}
              >
                Enviar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={4}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar 
                  sx={{ 
                    mr: 2, 
                    bgcolor: 'secondary.main',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.16)'
                  }}
                >
                  MD
                </Avatar>
                <Typography variant="h6">Card con avatar</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph>
                Los avatares pueden representar usuarios o marcas.
                Son útiles para personalizar la interfaz de usuario.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cada avatar puede ser personalizado con colores e iniciales.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined" sx={{ mx: 'auto', px: 3 }}>Ver perfil</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CardGrid;