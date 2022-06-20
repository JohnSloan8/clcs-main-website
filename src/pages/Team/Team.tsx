import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Team() {
  return (
    <>
      <Meta title="page 3" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Team</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Team;
