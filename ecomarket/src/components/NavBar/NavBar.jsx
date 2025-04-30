import {
    AppBar,
    Toolbar,
    Box,
    Stack,
    Button,
    Container,
    Popover,
    IconButton,
  } from '@mui/material';
  import { useState, useRef } from 'react';
  import { NavLink } from 'react-router-dom'; // ← Para navegación con estilo activo
  import { useTheme } from '../context/ThemeContext';
  import Logo from './Logo';
  import SearchBar from './SearchBar';
  import UserMenu from './UserMenu';
  import CartButton from './CartButton';
  import DrawerMenu from './DrawerMenu';
  import MenuButton from './MenuButton';
  import BancoSimpleButton from './BancoSimpleButton';
  import LightModeIcon from '@mui/icons-material/LightMode';
  import DarkModeIcon from '@mui/icons-material/DarkMode';
  
  const NavBar = () => {
    const { darkMode, toggleTheme, colors } = useTheme();
    const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
    const categoryButtonRef = useRef(null);
  
    const handleCategoryButtonClick = () => {
      setCategoryMenuOpen(!categoryMenuOpen);
    };
  
    const handleCategoryMenuClose = () => {
      setCategoryMenuOpen(false);
    };
  
    const lightTopBar = '#1565c0';
    const lightBottomBar = '#1976d2';
    const darkTopBar = '#212121';
    const darkBottomBar = '#424242';
  
    const topBarColor = darkMode ? darkTopBar : lightTopBar;
    const bottomBarColor = darkMode ? darkBottomBar : lightBottomBar;
  
    // Estilo base y activo para los botones de navegación
    const linkStyle = {
      color: 'white',
      textTransform: 'none',
      fontWeight: 500,
      '&:hover': {
        opacity: 0.8,
      },
    };
  
    const activeLinkStyle = {
      borderBottom: '2px solid white',
    };
  
    return (
      <AppBar position="static" sx={{ backgroundColor: topBarColor }}>
        {/* Fila superior */}
        <Toolbar
          sx={{
            minHeight: '48px !important',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
            }}
          >
            {/* IZQUIERDA */}
            <Box display="flex" alignItems="center" gap={1}>
              <MenuButton />
              <Logo />
            </Box>
  
            {/* CENTRO */}
            <Box
              sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mx: 2 }}
            >
              <SearchBar />
            </Box>
  
            {/* DERECHA */}
            <Box display="flex" alignItems="center" gap={1}>
              <BancoSimpleButton />
              <IconButton onClick={toggleTheme} color="inherit" size="small">
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
  
        {/* Fila inferior */}
        <Box sx={{ backgroundColor: bottomBarColor }}>
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 0.5,
              px: 2,
            }}
          >
            {/* NAVEGACIÓN */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Stack direction="row" spacing={4}>
                <Button
                  variant="text"
                  onClick={handleCategoryButtonClick}
                  ref={categoryButtonRef}
                  sx={linkStyle}
                >
                  Categorías
                </Button>
                <Button component={NavLink} to="/novedades" sx={linkStyle}>
                  Novedades
                </Button>
                <Button component={NavLink} to="/ofertas" sx={linkStyle}>
                  Ofertas
                </Button>
                <Button component={NavLink} to="/ayuda" sx={linkStyle}>
                  Ayuda
                </Button>
                <Button
                  component={NavLink}
                  to="/nosotros"
                  sx={({ isActive }) =>
                    isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
                  }
                >
                  Nosotros
                </Button>
              </Stack>
            </Box>
  
            {/* USUARIO Y CARRITO */}
            <Box display="flex" alignItems="center" gap={1}>
              <UserMenu />
              <CartButton />
            </Box>
          </Container>
        </Box>
  
        {/* Menú de Categorías */}
        <Popover
          open={categoryMenuOpen}
          anchorEl={categoryButtonRef.current}
          onClose={handleCategoryMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Box
            sx={{
              border: '1px solid #ccc',
              backgroundColor: colors.background,
              color: colors.text,
            }}
          >
            <Stack spacing={1} sx={{ p: 2 }}>
              {[
                'Ropa de Hombre',
                'Ropa de Mujer',
                'Ropa de Niños',
                'Accesorios de Moda',
                'Cuidado Personal',
                'Hogar y Decoración',
                'Tecnología',
                'Libros y Papelería',
                'Deportes y Aire Libre',
                'Mascotas',
              ].map((category) => (
                <Button
                  key={category}
                  onClick={handleCategoryMenuClose}
                  fullWidth
                  sx={{ textAlign: 'left', color: colors.text }}
                >
                  {category}
                </Button>
              ))}
            </Stack>
          </Box>
        </Popover>
  
        <DrawerMenu />
      </AppBar>
    );
  };
  
  export default NavBar;