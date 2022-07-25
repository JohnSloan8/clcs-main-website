import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import forumLogo from '/Forum_Logo.png';
import heaLogo from '/HEA-logo1.jpg';
import rialtasLogo from '/Rialtas_MARK_MASTER_Std_Colour.png';
import genieImage from '/genie-centered.png';
import tcdLogo from '/tcdLogo.png';

function Footer() {
  return (
    <Container
      maxWidth={false}
      sx={{
        position: 'absolute',
        border: 0,
        bgcolor: '#fff',
        borderTop: '2px solid #eee',
        padding: 4,
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={3} sm={6} xs={12}>
            <Grid container justifyContent="center" alignItems="center">
              <a href="https://www.tcd.ie/">
                <img src={tcdLogo} height={50} alt="genie" />
              </a>
            </Grid>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Grid container justifyContent="center" alignItems="center">
              <a href="https://www.gov.ie/en/">
                <img src={rialtasLogo} height={50} alt="genie" />
              </a>
            </Grid>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Grid container justifyContent="center" alignItems="center">
              <a href="https://www.teachingandlearning.ie/">
                <img src={heaLogo} height={50} alt="genie" />
              </a>
            </Grid>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Grid container justifyContent="center" alignItems="center">
              <a href="https://hea.ie/">
                <img src={forumLogo} height={50} alt="genie" />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ float: 'right', position: 'absolute', right: '20px', top: '30px' }}>
          <img src={genieImage} width={45} alt="genie" />
        </Box>
      </Container>
    </Container>
  );
}

export default Footer;
