import { useEffect } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import CTest from '@/components/TestComponents/CTest';
import Dictation from '@/components/TestComponents/Dictation';
import FillInTheBlanks from '@/components/TestComponents/FillInTheBlanks';
import { useCurrentTest } from '@/store/search';

function Test() {
  const { currentTest } = useCurrentTest();

  useEffect(() => {
    console.log('currentTest:', currentTest);
  });

  return (
    <>
      <Meta title="test" />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Typography variant="h4" align="center" color="text.primary" gutterBottom>
          {currentTest.title}
        </Typography>
        <Typography component="p" variant="body1" align="center" color="text.primary" gutterBottom>
          {currentTest.language} {currentTest.level} {currentTest.test_type}{' '}
        </Typography>
      </Container>
      <Container maxWidth="md">
        {currentTest.test_type === 'C-Test' && <CTest />}
        {currentTest.test_type === 'Fill In The Blanks' && <FillInTheBlanks />}{' '}
        {currentTest.test_type === 'Dictation' && <Dictation />}
      </Container>
    </>
  );
}

export default Test;
