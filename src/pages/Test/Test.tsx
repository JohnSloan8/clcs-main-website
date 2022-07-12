import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import DownloadButton from '@/components/DownloadButton';
import Meta from '@/components/Meta';
import CTest from '@/components/TestComponents/CTest';
import Dictation from '@/components/TestComponents/Dictation';
import FillInTheBlanks from '@/components/TestComponents/FillInTheBlanks';
import { useCurrentTest } from '@/store/search';

function Test() {
  const { currentTest } = useCurrentTest();

  useEffect(() => {
    console.log('currentTest:', currentTest);
  }, [currentTest]);

  return (
    <>
      <Meta title="test" />
      {currentTest.id === 1 ? (
        <Container maxWidth="sm" sx={{ pt: 4 }}>
          <Typography variant="h4" align="center" color="text.primary" gutterBottom>
            No test selected
          </Typography>
        </Container>
      ) : (
        <>
          <Container maxWidth="sm" sx={{ pt: 4 }}>
            <Typography variant="h4" align="center" color="text.primary" gutterBottom>
              {currentTest.title}
            </Typography>
            <Typography
              component="p"
              variant="body1"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {currentTest.language} {currentTest.level} {currentTest.test_type}{' '}
            </Typography>
          </Container>
          <Container maxWidth="md">
            {currentTest.test_type === 'C-Test' && <CTest />}
            {currentTest.test_type === 'Fill In The Blanks' && <FillInTheBlanks />}{' '}
            {currentTest.test_type === 'Dictation' && <Dictation />}
          </Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
            <DownloadButton />
          </Box>
        </>
      )}
    </>
  );
}

export default Test;
