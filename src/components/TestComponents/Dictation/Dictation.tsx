import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/components/styled';
import { useApiURL, useCurrentTest } from '@/store/search';

const Dictation = () => {
  const { currentTest } = useCurrentTest();

  let apiMediaURL = useApiURL();
  if (currentTest.url !== undefined) {
    apiMediaURL += currentTest.url.slice(1);
  }
  useEffect(() => {
    console.log('in effect');
  }, []);

  return (
    <Container maxWidth="md">
      <Card sx={{ m: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Recording
          </Typography>
          {apiMediaURL !== '' && (
            <CenteredFlexBox>
              <audio controls src={apiMediaURL}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </CenteredFlexBox>
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

export default Dictation;
