import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawer } from './useDrawerContext';

const MenuButton = () => {
  const { toggleDrawer } = useDrawer();

  return (
    <IconButton
      edge="start"
      color="inherit"
      onClick={() => toggleDrawer(true)}
      sx={{ display: { sm: 'none' }, mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;