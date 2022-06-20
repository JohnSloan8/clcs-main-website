import EmailIcon from '@mui/icons-material/Email';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Home]: {
    component: asyncComponentLoader(() => import('@/pages/Home')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  [Pages.About]: {
    component: asyncComponentLoader(() => import('@/pages/About')),
    path: '/about',
    title: 'About',
    icon: HelpIcon,
  },
  [Pages.Team]: {
    component: asyncComponentLoader(() => import('@/pages/Team')),
    path: '/team',
    title: 'Team',
    icon: GroupsIcon,
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/pages/Contact')),
    path: '/contact',
    title: 'Contact',
    icon: EmailIcon,
  },
  [Pages.Search]: {
    component: asyncComponentLoader(() => import('@/pages/Search')),
    path: '/search',
    title: 'Search',
    icon: SearchIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
