import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function About() {
  return (
    <>
      <Meta title="about" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">About</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default About;
