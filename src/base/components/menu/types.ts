import { ElementType } from 'react';

export interface MenuItem {
  id: string;
  title: string;
  icon: ElementType;
  path?: string;
  badge?: number;
  items?: MenuItem[];
}

export interface MenuItemProps {
  item: MenuItem;
  level?: number;
}
