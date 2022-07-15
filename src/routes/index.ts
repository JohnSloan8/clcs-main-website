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
    showWhenSignedIn: true,
  },
  [Pages.About]: {
    component: asyncComponentLoader(() => import('@/pages/About')),
    path: '/about',
    title: 'About',
    icon: HelpIcon,
    showWhenSignedIn: true,
  },
  [Pages.Team]: {
    component: asyncComponentLoader(() => import('@/pages/Team')),
    path: '/team',
    title: 'Team',
    icon: GroupsIcon,
    showWhenSignedIn: true,
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/pages/Contact')),
    path: '/contact',
    title: 'Contact',
    icon: EmailIcon,
    showWhenSignedIn: true,
  },
  [Pages.Search]: {
    component: asyncComponentLoader(() => import('@/pages/Search')),
    path: '/search',
    title: 'Search',
    icon: SearchIcon,
    showWhenSignedIn: true,
  },
  [Pages.Register]: {
    component: asyncComponentLoader(() => import('@/pages/Register')),
    path: '/register',
    title: 'Register',
    icon: undefined,
    showWhenSignedIn: false,
  },
  [Pages.SignIn]: {
    component: asyncComponentLoader(() => import('@/pages/SignIn')),
    path: '/signIn',
    title: 'SignIn',
    icon: undefined,
    showWhenSignedIn: false,
  },
  [Pages.Message]: {
    component: asyncComponentLoader(() => import('@/pages/Message')),
    path: '/message',
    title: 'Message',
    icon: undefined,
    showWhenSignedIn: true,
  },
  [Pages.Test]: {
    component: asyncComponentLoader(() => import('@/pages/Test')),
    path: '/test',
    title: 'Test',
    icon: undefined,
    showWhenSignedIn: true,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
    title: 'NotFound',
    icon: undefined,
    showWhenSignedIn: true,
  },
};

export default routes;
