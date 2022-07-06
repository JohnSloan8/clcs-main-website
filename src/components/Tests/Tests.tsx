import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import axios from 'axios';

import {
  useApiURL,
  useCurrentTest,
  useLanguage,
  useLevel,
  useTestType,
  useTests,
  useTestsDisplay,
} from '@/store/search';

interface Test {
  id: number;
  attributes: Record<string, unknown>;
}

const Tests = () => {
  const apiURLBase = useApiURL() + 'api/';
  const { tests, setTests } = useTests();
  const { testsDisplay, setTestsDisplay } = useTestsDisplay();
  const { language } = useLanguage();
  const { level } = useLevel();
  const { testType } = useTestType();
  const { setCurrentTest } = useCurrentTest();
  const navigate = useNavigate();

  useEffect(() => {
    const apiURL = apiURLBase + 'tests?populate=%2A';
    const getData = () => {
      axios.get(apiURL).then((data) => {
        const tempArray: string[] = [];
        data.data.data.forEach((d: Test) => {
          tempArray.push(d);
        });
        setTests([...tests, ...tempArray]);
        setTestsDisplay([...tests, ...tempArray]);
      });
    };
    if (tests.length === 0) {
      getData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log('updating test list');
    const tempTestsDisplay = tests.filter((t) => {
      return (
        (t.attributes.language.data.attributes.name === language || language === 'All') &&
        (t.attributes.level.data.attributes.name === level || level === 'All') &&
        (t.attributes.test_type.data.attributes.name === testType || testType === 'All')
      );
    });
    setTestsDisplay(tempTestsDisplay);
  }, [language, level, testType]); // eslint-disable-line react-hooks/exhaustive-deps

  const selectTest = (test: Test) => {
    console.log('test:', test);
    setCurrentTest(test);
    navigate('/test');
  };

  return (
    <Container maxWidth="md">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>language</TableCell>
              <TableCell align="left">level</TableCell>
              <TableCell align="left">test type</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testsDisplay.map((test) => (
              <TableRow
                key={test.attributes.title + test.attributes.language.data.attributes.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {test.attributes.language.data.attributes.name}
                </TableCell>
                <TableCell align="left">{test.attributes.level.data.attributes.name}</TableCell>
                <TableCell align="left">{test.attributes.test_type.data.attributes.name}</TableCell>
                <TableCell align="left">
                  {/* <Link
                    to={{
                      pathname: `/test/${test.id}`,
                    }}
                  > */}
                  <Button variant="contained" onClick={() => selectTest(test)}>
                    View
                  </Button>
                  {/* </Link> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Tests;
