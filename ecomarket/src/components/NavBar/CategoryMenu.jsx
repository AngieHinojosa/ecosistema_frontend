import { Box, Stack, Button, Popover } from '@mui/material';

const CategoryMenu = ({ open, onClose, anchorEl }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Box sx={{ border: '1px solid #ccc', minWidth: 200 }}> {/* Añadimos un minWidth para que no se vea muy angosto */}
        <Stack spacing={1} sx={{ p: 1 }}> {/* Reduje un poco el padding */}
          {['Ropa de Hombre', 
          'Ropa de Mujer', 
          'Ropa de Niños', 
          'Accesorios de Moda', 
          'Cuidado Personal', 
          'Hogar y Decoración', 
          'Tecnología', 
          'Libros y Papelería',
          'Deportes y Aire Libre',
          'Mascotas'].map((category) => (
            <Button
              key={category}
              onClick={onClose}
              fullWidth
              sx={{ textAlign: 'left', justifyContent: 'flex-start', backgroundColor: 'lightblue' }} // Alineamos el texto a la izquierda y el contenido al inicio
            >
              {category}
            </Button>
          ))}
        </Stack>
      </Box>
    </Popover>
  );
};

export default CategoryMenu;