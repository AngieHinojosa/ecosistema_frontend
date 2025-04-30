import { Drawer, Box, List, ListItem, ListItemText } from '@mui/material';
import { useDrawer } from './useDrawerContext';

const DrawerMenu = () => {
  const { drawerOpen, toggleDrawer } = useDrawer();

  const menuItems = ['Inicio', 'Productos', 'Ofertas', 'Contacto'];

  return (
    <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 250 }} onClick={() => toggleDrawer(false)}>
        <List>
          {menuItems.map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;