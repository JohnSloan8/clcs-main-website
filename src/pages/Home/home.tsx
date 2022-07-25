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
      <Container maxWidth="md" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Testing Suite
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          A collection of language testing tools from the Centre for Language and Communication
          Studies
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ backgroundColor: 'primary.light', py: 4, my: 6 }}>
        <Container>
          <Typography component="h1" variant="h5" align="center" color="text.primary" gutterBottom>
            Language Tests
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            Access a suite of online language testing tools for a range of European and Asian
            languages
          </Typography>
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
            <Stack sx={{ pt: 4, pb: 0 }} direction="row" spacing={2} justifyContent="center">
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
      </Container>
      <Container maxWidth="md" sx={{ backgroundColor: 'primary.light', py: 4, pb: 8, mb: 8 }}>
        <Container>
          <Typography component="h1" variant="h5" align="center" color="text.primary" gutterBottom>
            Irish Sign Language Card Flip Game
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            Discover the world of Irish Sign Language and learn fingerspelling with a fun memory
            game
          </Typography>
          {/* </Container>
        <Container sx={{ pt: 4, pb: 12 }} maxWidth="sm"> */}
          <Grid container spacing={4}>
            <Grid item key="islDiscover" xs={12} sm={6} md={6}>
              <ClickCard
                title="DISCOVER"
                description="Learn about Irish Sign Language"
                padding={8}
                onClick={() =>
                  (window.location.href = 'https://isl-card-flip-game.netlify.app/intro1')
                }
                color="primary.dark"
              />
            </Grid>
            <Grid item key="islLearn" xs={12} sm={6} md={6}>
              <ClickCard
                title="PLAY"
                description="Free the genie by matching signs with letters"
                padding={8}
                onClick={() => (window.location.href = 'https://isl-card-flip-game.netlify.app/')}
                color="primary.dark"
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Box sx={{ position: 'relative', bottom: 0, width: '100%' }}>
        <Footer />
      </Box>
    </>
  );
}

export default Welcome;
