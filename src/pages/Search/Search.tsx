import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Search() {
  return (
    <>
      <Meta title="search" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">Search</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Search;
