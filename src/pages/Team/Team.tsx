import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';

function Team() {
  return (
    <>
      <Meta title="page 3" />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          Team
        </Typography>
      </Container>
    </>
  );
}

export default Team;
