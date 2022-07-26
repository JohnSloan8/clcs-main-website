import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import MarkdownToHTML from '@/components/TestComponents/MarkdownToHTML';
import { useCurrentTest } from '@/store/search';

const CTest = () => {
  const { currentTest } = useCurrentTest();

  return (
    <Box maxWidth="md" id="mainCont">
      <Card sx={{ m: 2 }}>
        <CardContent id="exercise">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Exercise
          </Typography>
          {currentTest.blanks !== undefined && (
            <MarkdownToHTML markdown={currentTest.blanks.replaceAll('~', '_')} />
          )}
        </CardContent>
      </Card>
      <Card sx={{ m: 2 }}>
        <CardContent id="answer">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Answer
          </Typography>
          {currentTest.text !== undefined && <MarkdownToHTML markdown={currentTest.text} />}
        </CardContent>
      </Card>
    </Box>
  );
};

export default CTest;
