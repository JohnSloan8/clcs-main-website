import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { FlexBox } from '@/components/styled';
import { title } from '@/config';
import useSidebar from '@/store/sidebar';

function Header() {
  const [, sidebarActions] = useSidebar();
  const navigate = useNavigate();

  const aladinTheme = createTheme({
    typography: {
      fontFamily: 'Aladin',
    },
  });

  function showNotification() {
    navigate('/');
    // notificationsActions.push({
    //   options: {
    //     // Show fully customized notification
    //     // Usually, to show a notification, you'll use something like this:
    //     // notificationsActions.push({ message: ... })
    //     // `message` accepts string as well as ReactNode
    //     // But you also can use:
    //     // notificationsActions.push({ options: { content: ... } })
    //     // to show fully customized notification
    //     content: (
    //       <Alert severity="info">
    //         <AlertTitle>Notification demo (random IT jokes :))</AlertTitle>
    //         {getRandomJoke()}
    //       </Alert>
    //     ),
    //   },
    // });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center', width: '100%' }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              sx={{ mr: 1, zIndex: 100 }}
            >
              <MenuIcon />
            </IconButton>
            <FlexBox
              sx={{ position: 'absolute', left: '0', justifyContent: 'center', width: '100%' }}
            >
              <Button onClick={showNotification} color="info">
                <ThemeProvider theme={aladinTheme}>
                  <Typography variant="h4" color="black">
                    {title}
                  </Typography>
                </ThemeProvider>
              </Button>
            </FlexBox>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
