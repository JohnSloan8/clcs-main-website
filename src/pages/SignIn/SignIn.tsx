import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import axios from 'axios';

import Meta from '@/components/Meta';
import { useAuth } from '@/store/auth';

// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const SignIn = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      identifier: 'admin',
      password: data.get('password'),
    };
    axios
      .post('https://clcs-strapi-backend.herokuapp.com/api/auth/local', formData)
      .then(() => {
        setAuth(true);
        navigate('/search');
      })
      .catch((e) => {
        console.log('problem:', e);
      });
  };

  return (
    <>
      <Meta title="sign in" />
      <Container maxWidth="xs" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          Access Tests
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Go
          </Button>
          <Grid container>
            <Grid item>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  navigate('/Register');
                }}
              >
                {"Don't have access? Request Permission"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </>
  );
};

export default SignIn;
