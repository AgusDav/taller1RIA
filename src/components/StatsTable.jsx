import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
  { label: "Usuarios", value: "1,200" },
  { label: "Visitas", value: "5,430" },
  { label: "Proyectos", value: "85" },
  { label: "Tareas Completadas", value: "2,310" }
];

const StatsTable = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mt: 2, mb: 3, fontWeight: 'bold',  }}>
          Tarjetas con animación
      </Typography>
      
      <Box sx={{ p: 4 }}>
        <Grid 
          container 
          spacing={4} 
          justifyContent="center" // centramos los ítems
          maxWidth="md" // ancho máximo
          margin="0 auto" // centramos el Grid en la página
        >
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card elevation={6}>
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {stat.label}
                    </Typography>
                    <Typography variant="h4" align="center" sx={{ mt: 1 }}>
                      {stat.value}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default StatsTable;