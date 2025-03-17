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
} from '@mui/icons-material';
import { MenuItem } from '../src/base/components/menu/types';

const getMenuItems = (): MenuItem[] => [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: Dashboard,
    badge: 3,
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
        icon: List, // Ícone para a listagem de tarefas
        items: [
          {
            id: 'tarefas-listagem',
            title: 'Listagem',
            icon: List,
          },
          {
            id: 'tarefas-cadastro',
            title: 'Cadastro',
            icon: PostAdd, // Ícone para o cadastro de tarefas
          },
        ],
      },
    ],
  },
];

export default getMenuItems;
