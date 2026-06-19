import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Divider,
  useTheme,
} from '@mui/material';
import { menuData } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const Menu = () => {
  const theme = useTheme();
  const { lang } = useLanguage();
  const t = translations[lang];
  const [tabValue, setTabValue] = useState(0);

  const categories = [
    { id: 'salads', label: t.menu?.categories?.salads || 'Salades', data: menuData.salads },
    { id: 'poissons', label: t.menu?.categories?.poissons || 'Poissons', data: menuData.poissons },
    { id: 'grillades', label: t.menu?.categories?.grillades || 'Grillades', data: menuData.grillades },
    { id: 'pates', label: t.menu?.categories?.pates || 'Pâtes', data: menuData.pates },
    { id: 'tunisiennes', label: t.menu?.categories?.tunisiennes || 'Tunisiennes', data: menuData.tunisiennes },
    { id: 'garniture', label: t.menu.categories.garniture, data: menuData.garniture }, 
];

  const handleChange = (event, newValue) => setTabValue(newValue);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>
          {t.menu.title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1 }}>
          {t.menu.subtitle}
        </Typography>
        <Divider sx={{ mt: 3, width: '60%', mx: 'auto' }} />
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="secondary"
          sx={{
            '& .MuiTab-root': {
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
              py: 2,
              px: 3,
            },
          }}
        >
          {categories.map((cat) => (
            <Tab key={cat.id} label={cat.label} />
          ))}
        </Tabs>
      </Box>

      {categories.map((cat, idx) => (
        <TabPanel key={cat.id} value={tabValue} index={idx}>
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 0.5 }}>
              {cat.data.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
              {cat.data.items.length} plats
            </Typography>

            <Box>
              {cat.data.items.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    py: 1.5,
                    borderBottom: i < cat.data.items.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
                  }}
                >
                  <Box sx={{ flex: 1, pr: 2 }}>
                    <Typography variant="body1" fontWeight={600}>
                      {item.name}
                    </Typography>
                    {item.description && (
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', mt: 0.25 }}>
                        {item.description}
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="body1" fontWeight={700} color="secondary.main" sx={{ whiteSpace: 'nowrap' }}>
                    {item.price}
                  </Typography>
                </Box>
              ))}
            </Box>

            {cat.id === 'grillades' && cat.data.sides && (
              <Box sx={{ mt: 4, p: 3, bgcolor: theme.palette.grey[100], borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  {cat.data.sides.title}
                </Typography>
                <Grid container spacing={1}>
                  {cat.data.sides.items.map((side, si) => (
                    <Grid item xs={12} sm={6} key={si}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.75, borderBottom: `1px solid ${theme.palette.divider}` }}>
                        <Typography variant="body2">{side.name}</Typography>
                        <Typography variant="body2" fontWeight={700} color="secondary.main">
                          {side.price}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        </TabPanel>
      ))}

      <Divider sx={{ mt: 6, mb: 2 }} />
      <Typography variant="body2" align="center" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
        {t.menu.note}
      </Typography>
    </motion.div>
  );
};

export default Menu;