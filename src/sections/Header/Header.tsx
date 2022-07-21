import { useNavigate } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { FlexBox } from '@/components/styled';
import { title } from '@/config';
import useSidebar from '@/store/sidebar';

function Header() {
  const [, sidebarActions] = useSidebar();
  const navigate = useNavigate();

  function showNotification() {
    navigate('/');
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <Box sx={{ flexGrow: 1, borderBottom: '1px solid #eee' }}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center', width: '100%' }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 1, zIndex: 100 }}
            >
              <MenuIcon />
            </IconButton>
            <FlexBox
              sx={{
                position: 'absolute',
                left: '0',
                justifyContent: 'center',
                width: '100%',
                zIndex: 1,
              }}
            >
              <Button onClick={showNotification} color="info">
                <Typography variant="h4" color="primary.main" fontFamily="aladin">
                  {title}
                </Typography>
              </Button>
              <FlexBox
                sx={{
                  position: 'absolute',
                  justifyContent: 'right',
                  alignItems: 'center',
                  right: 0,
                }}
              >
                <IconButton
                  onClick={goBack}
                  size="large"
                  edge="end"
                  color="primary"
                  aria-label="menu"
                  sx={{ mr: 1, zIndex: 0 }}
                >
                  <ArrowBackIcon />
                </IconButton>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
