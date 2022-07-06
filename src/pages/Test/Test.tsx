import { useEffect } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import CTest from '@/components/TestComponents/CTest';
import Dictation from '@/components/TestComponents/Dictation';
import FillInTheBlanks from '@/components/TestComponents/FillInTheBlanks';
import { FullSizeBox } from '@/components/styled';
import { useCurrentTest } from '@/store/search';

function Test() {
  const { currentTest } = useCurrentTest();

  useEffect(() => {
    console.log('currentTest:', currentTest);
  });

  return (
    <>
      <Meta title="test" />
      <FullSizeBox
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" color="text.primary" gutterBottom>
            {currentTest.attributes.title}
          </Typography>
          <Typography component="p" variant="p" align="center" color="text.primary" gutterBottom>
            {currentTest.attributes.language.data.attributes.name}{' '}
            {currentTest.attributes.level.data.attributes.name}{' '}
            {currentTest.attributes.test_type.data.attributes.name}{' '}
          </Typography>
        </Container>
        <Container maxWidth="md">
          {currentTest.attributes.test_type.data.attributes.name === 'C-Test' && <CTest />}
          {currentTest.attributes.test_type.data.attributes.name === 'Fill In The Blanks' && (
            <FillInTheBlanks />
          )}{' '}
          {currentTest.attributes.test_type.data.attributes.name === 'Dictation' && <Dictation />}
        </Container>
      </FullSizeBox>
    </>
  );
}

export default Test;
