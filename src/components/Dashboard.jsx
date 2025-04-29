import { Box, Typography, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";

const Dashboard = () => {
  const stats = [
    { name: 'Usuarios activos', value: 1200 },
    { name: 'Ventas hoy', value: 350 },
    { name: 'Nuevos registros', value: 75 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        {/* Alerta */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
        </motion.div>

        {/* Tabla animada */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h6" gutterBottom>
            Estadísticas Rápidas
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stats.map((stat, index) => (
                <TableRow key={index}>
                  <TableCell>{stat.name}</TableCell>
                  <TableCell>{stat.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>

        {/* Carrusel de contenido */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h6" sx={{ mt: 6, mb: 2 }}>
            Carrusel de novedades
          </Typography>

          <Slider {...settings}>
            {["Nueva función", "Actualización 2.0", "Eventos especiales"].map((text, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">{text}</Typography>
                    <Typography variant="body2">
                      {text} ya disponible en nuestra plataforma. ¡No te lo pierdas!
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </motion.div>

        {/* Botón con transición */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button variant="contained" color="primary" sx={{ mt: 6 }}>
            Ver más detalles
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Dashboard;