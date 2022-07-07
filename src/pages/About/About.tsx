import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';

function About() {
  return (
    <>
      <Meta title="about" />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          About
        </Typography>
      </Container>
    </>
  );
}

export default About;
