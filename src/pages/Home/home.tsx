import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ClickCard from '@/components/ClickCard';
import Meta from '@/components/Meta';

function Welcome() {
  // const isPortrait = useOrientation();

  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';
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

      <Container sx={{ py: 4 }} maxWidth="sm">
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
      </Container>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button variant="contained">Register for Access</Button>
        {/* <Button variant="outlined">Secondary action</Button> */}
      </Stack>
    </>
  );
}

export default Welcome;
