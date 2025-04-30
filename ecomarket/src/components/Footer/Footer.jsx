import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  const links = [
    { text: 'Trabaja con nosotros', href: '#' },
    { text: 'Términos y condiciones', href: '#' },
    { text: 'Promociones', href: '#' },
    { text: 'Cómo cuidamos tu privacidad', href: '#' },
    { text: 'Accesibilidad', href: '#' },
    { text: 'Ayuda', href: '#' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f8f8',
        py: 3,
        textAlign: 'center',
        mt: 4,
        fontFamily: 'Roboto, sans-serif', // Fuente más común y legible
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ mb: 1.5 }} // Reduje un poco el margen inferior
      >
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            underline="hover"
            color="inherit"
            sx={{ fontSize: '0.9rem' }}
          >
            {link.text}
          </Link>
        ))}
      </Stack>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: '0.75rem', mb: 0.5 }} // Tamaño más pequeño y reducido el margen inferior
      >
        Copyright © 1999-2025 EcoMarket y BancoSimple Chile Ltda.
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ fontSize: '0.7rem' }} // Tamaño aún más pequeño
      >
        Av. Los Libertadores 1234, Oficina 567, Providencia, Santiago - Chile.
      </Typography>
    </Box>
  );
};

export default Footer;