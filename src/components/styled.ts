import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});

const FullSizeFlexBox = styled(FlexBox)({
  width: '100%',
  height: '100%',
});

const FullSizeBox = styled(Box)({
  width: '100%',
  height: '100%',
});

export { FlexBox, CenteredFlexBox, FullSizeCenteredFlexBox, FullSizeFlexBox, FullSizeBox };
