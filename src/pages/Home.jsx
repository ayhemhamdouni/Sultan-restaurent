import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Rating,
  Container,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';
import {
  Restaurant,
  DeliveryDining,
  TakeoutDining,
  LocalDining,
} from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Home = () => {
  const theme = useTheme();
  const { lang } = useLanguage();
  const t = translations[lang];

  const featuredDishes = [
    {
      name: 'Filet de Bœuf',
      price: '23 TND',
      description: 'Seared beef with roasted onions and vegetables.',
      image: '/filet.jpg',
    },
    {
      name: 'Couscous à l\'agneau',
      price: '18 TND',
      description: 'Traditional lamb couscous, Sultan style.',
      image: '/couscous.jpg',
    },
    {
      name: 'Moules marinières',
      price: '18 TND',
      description: 'Moules cuites dans un jus corsé avec de l\'ail et des oignons finement ciselés.',
      image: '/moules.jpg',
    },
  ];

  const features = [
    { icon: <Restaurant />, label: t.features.dinein },
    { icon: <TakeoutDining />, label: t.features.takeaway },
    { icon: <DeliveryDining />, label: t.features.delivery },
    { icon: <LocalDining />, label: t.features.catering },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          minHeight: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: 4,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
          {/* Logo instead of text */}
          <img
            src="/favicon.png"
            alt="Sultan"
            style={{
              maxWidth: '80%',
              maxHeight: '120px',
              width: 'auto',
              height: 'auto',
              marginBottom: '16px',
            }}
          />
          <Typography variant="h5" sx={{ mb: 3 }}>
            {t.hero.subtitle}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 3 }}>
            <Rating value={4.5} precision={0.5} readOnly sx={{ color: '#ffb300' }} />
            <Typography variant="h6" component="span">
              4.5 ★ (171 reviews)
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/contact"
            sx={{ fontWeight: 'bold', px: 4, py: 1.5 }}
          >
            {t.cta.reserve}
          </Button>
        </Box>
      </Box>

      {/* Features */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
          {features.map((feature, idx) => (
            <Paper
              key={idx}
              elevation={2}
              sx={{
                p: 2,
                textAlign: 'center',
                minWidth: 100,
                flex: '1 1 120px',
                maxWidth: 150,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Box sx={{ fontSize: 40, color: theme.palette.primary.main }}>
                {feature.icon}
              </Box>
              <Typography variant="subtitle1">{feature.label}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* Featured Dishes – Flexbox Row */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {t.home.featured}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {featuredDishes.map((dish, idx) => (
            <Box
              key={idx}
              sx={{
                flex: '1 1 250px',
                maxWidth: 350,
                minWidth: 200,
                display: 'flex',
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={dish.image}
                  alt={dish.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    {dish.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {dish.description}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold" color="secondary.main">
                    {dish.price}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: 'white',
          py: 6,
          borderRadius: 2,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            {t.home.ready}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {t.home.desc}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/contact"
            sx={{ fontWeight: 'bold' }}
          >
            {t.cta.contact}
          </Button>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Home;