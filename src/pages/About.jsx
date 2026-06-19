import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Divider, Paper, useTheme } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const About = () => {
  const theme = useTheme();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>
          {t.about.title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1 }}>
          {t.about.subtitle}
        </Typography>
        <Divider sx={{ mt: 3, width: '60%', mx: 'auto' }} />
      </Box>

      <Paper elevation={2} sx={{ p: 4, maxWidth: '800px', mx: 'auto', borderRadius: 2 }}>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          {t.about.description}
        </Typography>
        <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          <Box sx={{ bgcolor: theme.palette.primary.main, color: 'white', px: 2, py: 1, borderRadius: 20 }}>
            🇹🇳 Tunisian Cuisine
          </Box>
          <Box sx={{ bgcolor: theme.palette.secondary.main, color: 'white', px: 2, py: 1, borderRadius: 20 }}>
            🌿 Fresh Ingredients
          </Box>
          <Box sx={{ bgcolor: theme.palette.primary.light, color: 'white', px: 2, py: 1, borderRadius: 20 }}>
            🍽️ Family-Run
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default About;