import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import genieImage from '/genie-centered.png';

function Footer() {
  return (
    <Container
      maxWidth="100%"
      sx={{ position: 'fixed', bottom: 0, border: 0, bgcolor: '#eee', padding: 1 }}
    >
      <Box sx={{ float: 'right' }}>
        <img src={genieImage} width={35} alt="genie" />
      </Box>
    </Container>
  );
}

export default Footer;
