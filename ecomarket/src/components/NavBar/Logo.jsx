import { Box } from '@mui/material';
import logo from '../../assets/logo.png'; // Asegúrate de que exista

const Logo = () => (
  <Box
    component="img"
    src={logo}
    alt="Logo"
    sx={{
      height: 55,
      width: 'auto',
      display: { xs: 'none', sm: 'block' }, // Mantenemos la configuración original de visibilidad
      position: 'relative',
      top: '20px', // Desplazamiento adicional hacia abajo
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)' // Pequeña animación al pasar el mouse
      }
    }}
  />
);

export default Logo;