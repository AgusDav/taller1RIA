import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";

const TransitionPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Página con Transición
        </Typography>
        <Typography variant="body1">
          Este contenido aparece suavemente con una animación de "fade" y "slide".
        </Typography>
      </Box>
    </motion.div>
  );
};

export default TransitionPage;