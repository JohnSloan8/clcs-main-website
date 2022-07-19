import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import genieImage from '/genie-centered.png';

function Footer() {
  return (
    <Container sx={{ position: 'absolute', bottom: 0, border: 0 }}>
      <Box sx={{ float: 'right' }}>
        <img src={genieImage} width={65} alt="genie" />
      </Box>
    </Container>
  );
}

export default Footer;
