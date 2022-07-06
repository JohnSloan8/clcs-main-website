import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeBox } from '@/components/styled';

function About() {
  return (
    <>
      <Meta title="about" />
      <FullSizeBox
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Typography variant="h3">About</Typography>
      </FullSizeBox>
    </>
  );
}

export default About;
