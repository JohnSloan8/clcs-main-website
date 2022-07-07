import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';

function Contact() {
  return (
    <>
      <Meta title="contact" />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          Contact
        </Typography>
      </Container>
    </>
  );
}

export default Contact;
