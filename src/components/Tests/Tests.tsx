/* eslint-disable  @typescript-eslint/no-explicit-any */
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

import DisplayTest from '@/models/DisplayTest';
import {
  useApiURL,
  useCurrentTest,
  useLanguage,
  useLevel,
  useTestType,
  useTests,
  useTestsDisplay,
} from '@/store/search';

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
    const apiURL = apiURLBase + 'tests?pagination[pageSize]=2000&populate=%2A';
    const getData = () => {
      axios.get(apiURL).then((data) => {
        const tempArray: DisplayTest[] = [];
        data.data.data.forEach((d: any) => {
          const newDisplayTestObject: DisplayTest = {
            id: d.id,
            text: d.attributes.text,
            blanks: d.attributes.blanks,
            title: d.attributes.title,
            language: d.attributes.language.data.attributes.name,
            level: d.attributes.level.data.attributes.name,
            test_type: d.attributes.test_type.data.attributes.name,
            url:
              d.attributes.recording.data !== null
                ? d.attributes.recording.data.attributes.url
                : 'none',
          };
          tempArray.push(newDisplayTestObject);
        });
        console.log('all tests:', tempArray);
        setTests(tempArray);
        setTestsDisplay(tempArray);
      });
    };
    if (tests.length === 0) {
      getData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log('updating test list');
    const tempTestsDisplay = tests.filter((t: DisplayTest) => {
      return (
        (t.language === language || language === 'All') &&
        (t.level === level || level === 'All') &&
        (t.test_type === testType || testType === 'All')
      );
    });
    setTestsDisplay(tempTestsDisplay);
  }, [language, level, testType]); // eslint-disable-line react-hooks/exhaustive-deps

  const selectTest = (test: DisplayTest) => {
    setCurrentTest(test);
    navigate('/test');
  };

  return (
    <Container maxWidth="md" sx={{ my: 2 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>language</TableCell>
              <TableCell align="left">level</TableCell>
              <TableCell align="left">test type</TableCell>
              <TableCell align="left">title</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testsDisplay.map((test: DisplayTest, i: number) => (
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {test.language}
                </TableCell>
                <TableCell align="left">{test.level}</TableCell>
                <TableCell align="left">{test.test_type}</TableCell>
                <TableCell align="left">{test.title}</TableCell>
                <TableCell align="left">
                  <Button variant="contained" onClick={() => selectTest(test)}>
                    View
                  </Button>
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
