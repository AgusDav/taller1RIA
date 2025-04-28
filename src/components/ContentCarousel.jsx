import { Card, CardContent, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const content = [
  { title: "Proyecto 1", description: "Descripción del proyecto 1" },
  { title: "Proyecto 2", description: "Descripción del proyecto 2" },
  { title: "Proyecto 3", description: "Descripción del proyecto 3" },
  { title: "Proyecto 4", description: "Descripción del proyecto 4" }
];

const ContentCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <Box sx={{ p: 4 }}>
      <Slider {...settings}>
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card elevation={8} sx={{ mx: 2 }}>
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
  );
};

export default ContentCarousel;