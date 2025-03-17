import React from 'react';
import {
  Drawer,
  List,
  Divider,
  Box,
} from '@mui/material';
import MenuItem from './menu/MenuItem';
import getMenuItems from '../../../config/menuConfig';

interface SidebarProps {
  open: boolean;
}

const drawerWidth = 240;

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const menuItems = getMenuItems();
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ height: 64 }} /> {/* Toolbar spacing */}
      <Divider />
      <List>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
