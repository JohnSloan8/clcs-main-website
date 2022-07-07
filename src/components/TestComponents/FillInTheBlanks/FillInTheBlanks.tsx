import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useCurrentTest } from '@/store/search';

const FillInTheBlanks = () => {
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
            <Typography variant="body1">{currentTest.blanks.replaceAll('#', '_')}</Typography>
          )}
        </CardContent>
      </Card>
      <Card sx={{ m: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Answer
          </Typography>
          <Typography variant="body1">{currentTest.text}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FillInTheBlanks;
