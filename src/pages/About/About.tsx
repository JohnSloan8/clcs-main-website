import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import Footer from '@/sections/Footer';

function About() {
  return (
    <>
      <Meta title="about" />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          About
        </Typography>
      </Container>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </Box>
    </>
  );
}

export default About;
