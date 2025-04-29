import { Card, CardContent, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const carouselStyles = {
  // Contenedor principal con suficiente padding
  carouselContainer: {
    padding: '40px 20px',  // Padding vertical y horizontal
    position: 'relative',
  },
  // Estilos para arreglar los problemas de overflow
  sliderContainer: {
    '& .slick-list': {
      overflow: 'visible !important', // Importante: permite que el contenido sea visible fuera del slider
      margin: '0 -20px', // Compensa el padding
    },
    '& .slick-track': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .slick-slide': {
      padding: '10px', // Espacio entre slides
      transition: 'all 0.3s ease',
    },
  },
  // Estilo para la tarjeta que solo se eleva en hover sin expansión horizontal
  card: {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-10px)', // Solo movimiento vertical hacia arriba
      boxShadow: '0 12px 20px rgba(0,0,0,0.2)', // Sombra más pronunciada para reforzar el efecto de elevación
    },
  }
};

const ContentCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    className: 'center',
    centerMode: true,
    centerPadding: '30px',
  };

  // Ejemplo de contenido
  const content = [
    {
      title: "Título 1",
      description: "Descripción del contenido 1. Este es un ejemplo de texto que puede expandirse al hacer hover."
    },
    {
      title: "Título 2",
      description: "Descripción del contenido 2. Este es otro ejemplo de texto para mostrar en el carrusel."
    },
    {
      title: "Título 3",
      description: "Descripción del contenido 3. Cada tarjeta tiene suficiente espacio para crecer sin recortarse."
    }
  ];

  return (
    <Box sx={carouselStyles.carouselContainer}>
      <Box sx={carouselStyles.sliderContainer}>
        <Slider {...settings}>
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card 
                elevation={8} 
                sx={carouselStyles.card}
              >
                <CardContent>
                  <Typography variant="h5" align="center">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ContentCarousel;