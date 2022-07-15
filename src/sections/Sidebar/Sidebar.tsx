import { Link } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import routes from '@/routes';
import { useAuth } from '@/store/auth';
import useSidebar from '@/store/sidebar';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();
  const { auth, setAuth } = useAuth();

  const logout = () => {
    sidebarActions.close();
    setAuth(false);
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      swipeAreaWidth={30}
    >
      <List sx={{ width: 250, pt: (theme) => `${theme.mixins.toolbar.minHeight}px` }}>
        {Object.values(routes)
          .filter((route) => route.icon)
          .map(({ path, title, icon: Icon }) => (
            <ListItem sx={{ p: 0 }} key={path}>
              <ListItemButton onClick={sidebarActions.close} component={Link} to={path}>
                <ListItemIcon sx={{ color: 'primary.main' }}>{Icon ? <Icon /> : null}</ListItemIcon>
                <ListItemText sx={{ color: 'primary.dark' }}>{title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        {auth && (
          <ListItem sx={{ p: 0 }} key="logout">
            <ListItemButton onClick={logout}>
              <ListItemIcon sx={{ color: 'primary.main' }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: 'primary.dark' }}>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
