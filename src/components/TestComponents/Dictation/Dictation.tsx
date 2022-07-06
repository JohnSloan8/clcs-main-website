import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/components/styled';
import { useApiURL, useCurrentTest } from '@/store/search';

const Dictation = () => {
  const { currentTest } = useCurrentTest();
  const apiMediaURL = useApiURL() + currentTest.attributes.recording.data.attributes.url.slice(1);

  useEffect(() => {
    console.log('in effect');
  }, []);

  return (
    <Container maxWidth="md">
      <Card sx={{ m: 4 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Recording
          </Typography>
          <CenteredFlexBox>
            <audio controls src={apiMediaURL}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </CenteredFlexBox>
        </CardContent>
      </Card>
      <Card sx={{ m: 4 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Answer
          </Typography>
          <Typography variant="body1">{currentTest.attributes.text}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dictation;
