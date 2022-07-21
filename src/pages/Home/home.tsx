import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ClickCard from '@/components/ClickCard';
import Meta from '@/components/Meta';
import Footer from '@/sections/Footer';
import { useAuth, useRegistered } from '@/store/auth';

function Welcome() {
  // const isPortrait = useOrientation();

  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';
  const { auth } = useAuth();
  const { registered } = useRegistered();
  const cards = [
    ['ABOUT', 'Learn about our tests'],
    ['SEARCH', 'Find a specific test'],
  ];
  const navigate = useNavigate();
  const cardClick = (route: string) => {
    console.log('route:', route);
    navigate('/' + route.toLowerCase());
  };
  return (
    <>
      <Meta title="Welcome" />
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ pt: 8 }}
        >
          Testing Suite
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          A collection of language testing tools from the Centre for Language and Communication
          Studies
        </Typography>
      </Container>

      <Container sx={{ pt: 4, pb: 12 }} maxWidth="sm">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card[0]} xs={12} sm={6} md={6}>
              <ClickCard
                title={card[0]}
                description={card[1]}
                padding={8}
                onClick={() => cardClick(card[0])}
                color="primary.dark"
              />
            </Grid>
          ))}
        </Grid>
        {!registered && (
          <Stack sx={{ pt: 8, pb: 12 }} direction="row" spacing={2} justifyContent="center">
            {!auth && (
              <Button
                variant="contained"
                sx={{ width: 100 }}
                onClick={() => {
                  navigate('/Register');
                }}
              >
                Register
              </Button>
            )}
          </Stack>
        )}
      </Container>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </Box>
    </>
  );
}

export default Welcome;
