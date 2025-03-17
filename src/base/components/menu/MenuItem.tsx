import React, { useState } from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Box,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { MenuItemProps } from './types';
import MenuBadge from './MenuBadge';

const MenuItem: React.FC<MenuItemProps> = ({ item, level = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = item.items && item.items.length > 0;
  const IconComponent = item.icon;

  const handleClick = () => {
    if (hasSubItems) {
      setOpen(!open);
    }
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{
          pl: level * 3 + 2,
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <ListItemIcon>
          <IconComponent />
        </ListItemIcon>
        <ListItemText primary={item.title} />
        {item.badge && (
          <Box ml={1}>
            <MenuBadge value={item.badge} />
          </Box>
        )}
        {hasSubItems && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {hasSubItems && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.items.map((subItem) => (
              <MenuItem key={subItem.id} item={subItem} level={level + 1} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default MenuItem;
