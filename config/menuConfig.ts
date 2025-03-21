import {
  Dashboard,
  Person,
  Assessment,
  Settings,
  People,
  Business,
  Assignment,
  Notifications,
  Mail,
  List,
  PostAdd,
  Security,
} from '@mui/icons-material';
import { MenuItem } from '../src/base/components/menu/types';
import { NavigateFunction } from 'react-router-dom'; // Import NavigateFunction

const getMenuItems = (navigate?: NavigateFunction): MenuItem[] => [ // Accept navigate
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: Dashboard,
    badge: 3,
    onClick: () => navigate && navigate('/'), // Use navigate to go to /
  },
  {
    id: 'users',
    title: 'Users',
    icon: Person,
    items: [
      {
        id: 'user-list',
        title: 'User List',
        icon: People,
        badge: 12,
      },
      {
        id: 'companies',
        title: 'Companies',
        icon: Business,
        badge: 4,
      },
    ],
  },
  {
    id: 'reports',
    title: 'Reports',
    icon: Assessment,
    items: [
      {
        id: 'daily-reports',
        title: 'Daily Reports',
        icon: Assignment,
        badge: 2,
      },
      {
        id: 'monthly-reports',
        title: 'Monthly Reports',
        icon: Assignment,
      },
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Notifications,
    badge: 5,
  },
  {
    id: 'messages',
    title: 'Messages',
    icon: Mail,
    badge: 3,
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: Settings,
  },
  {
    id: 'cadastro',
    title: 'Cadastro',
    icon: Person,
    items: [
      {
        id: 'pessoas',
        title: 'Pessoas',
        icon: People,
      },
      {
        id: 'tarefas',
        title: 'Tarefas',
        icon: List,
        items: [
          {
            id: 'tarefas-listagem',
            title: 'Listagem',
            icon: List,
            onClick: () => navigate && navigate('/tarefas-listagem'), // Navigate to /tarefas-listagem
          },
          {
            id: 'tarefas-cadastro',
            title: 'Cadastro',
            icon: PostAdd,
          },
        ],
      },
      {
        id: 'roles',
        title: 'Roles',
        icon: Security,
        items: [
          {
            id: 'roles-listagem',
            title: 'Listagem',
            icon: List,
            onClick: () => navigate && navigate('/roles-listagem'), // Navigate to /roles-listagem
          },
          {
            id: 'roles-cadastro',
            title: 'Cadastro',
            icon: PostAdd,
          },
        ],
      },
    ],
  },
];

export default getMenuItems;
