import { createContext, useContext, useState } from 'react';

const DrawerContext = createContext(null);

export const DrawerProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => setDrawerOpen(open);

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);