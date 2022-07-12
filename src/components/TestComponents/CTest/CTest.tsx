import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MarkdownToHTML from '@/components/TestComponents/MarkdownToHTML';
import { useCurrentTest } from '@/store/search';

const CTest = () => {
  const { currentTest } = useCurrentTest();

  useEffect(() => {
    console.log('in effect');
  }, []);

  return (
    <Container maxWidth="md">
      <Card sx={{ m: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Exercise
          </Typography>
          {currentTest.blanks !== undefined && (
            <MarkdownToHTML markdown={currentTest.blanks.replaceAll('~', '_')} />
          )}
        </CardContent>
      </Card>
      <Card sx={{ m: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Answer
          </Typography>
          {currentTest.text !== undefined && <MarkdownToHTML markdown={currentTest.text} />}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CTest;
