import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Divider, Paper, Button, useTheme } from '@mui/material';
import { Phone, LocationOn, AccessTime, LocalParking } from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Contact = () => {
  const theme = useTheme();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>
          {t.contact.title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1 }}>
          {t.contact.subtitle}
        </Typography>
        <Divider sx={{ mt: 3, width: '60%', mx: 'auto' }} />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'stretch' }}>
        <Box sx={{ flex: '1 1 40%', minWidth: '280px', display: 'flex' }}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn color="secondary" />
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">{t.contact.address}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Avenue Hamda Laaouani, Kairouan, Tunisia
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone color="secondary" />
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">{t.contact.phone}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    <a href="tel:+21670295348" style={{ color: theme.palette.secondary.main, textDecoration: 'none' }}>70 295 348</a>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AccessTime color="secondary" />
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">{t.contact.hours}</Typography>
                  <Typography variant="body2" color="text.secondary">Daily: 11:30 AM – 10:00 PM</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocalParking color="secondary" />
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">{t.contact.parking}</Typography>
                  <Typography variant="body2" color="text.secondary">Free street & lot parking</Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${theme.palette.divider}`, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">{t.contact.reserveNote}</Typography>
                <Button variant="contained" color="secondary" href="tel:+21670295348" startIcon={<Phone />} sx={{ fontWeight: 'bold' }}>
                  {t.cta.reserve}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ flex: '1 1 50%', minWidth: '300px', minHeight: '400px', display: 'flex' }}>
          <Paper elevation={2} sx={{ p: 1, borderRadius: 2, overflow: 'hidden', width: '100%', display: 'flex' }}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=10.0995%2C35.6695%2C10.1055%2C35.6735&layer=mapnik&marker=35.6715%2C10.1025"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px', flex: 1 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sultan Restaurant location"
            ></iframe>
          </Paper>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Contact;