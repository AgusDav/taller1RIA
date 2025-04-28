import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const ScrollSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Box sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Sección con Efecto Scroll
        </Typography>
        <Typography variant="body1">
          Este contenido se muestra cuando hacés scroll y llega a la vista.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default ScrollSection;